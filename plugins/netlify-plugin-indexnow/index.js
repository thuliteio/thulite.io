const { readFile, writeFile, mkdir } = require("node:fs/promises");
const { join } = require("node:path");

const ENDPOINT = "https://api.indexnow.org/indexnow";
const STATE_DIR = ".cache/indexnow";
const STATE_FILE = join(STATE_DIR, "state.json");
const FALLBACK_WINDOW_MS = 24 * 60 * 60 * 1000;
const BATCH_SIZE = 10000;

const isProduction = () => process.env.CONTEXT === "production";

function parseEntries(xml, tag) {
  const entries = [];
  const re = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, "g");
  for (const [, body] of xml.matchAll(re)) {
    const loc = body.match(/<loc>\s*(.*?)\s*<\/loc>/)?.[1];
    const lastmod = body.match(/<lastmod>\s*(.*?)\s*<\/lastmod>/)?.[1];
    if (loc) entries.push({ loc, lastmod: lastmod ? Date.parse(lastmod) : NaN });
  }
  return entries;
}

// Reads sitemaps from the publish dir by mapping absolute URLs onto local files.
async function collectUrls(publishDir, sitemapIndex) {
  const index = await readFile(join(publishDir, sitemapIndex), "utf8");
  const urls = [];
  for (const { loc } of parseEntries(index, "sitemap")) {
    const xml = await readFile(join(publishDir, new URL(loc).pathname), "utf8");
    urls.push(...parseEntries(xml, "url"));
  }
  return urls;
}

module.exports = {
  async onPreBuild({ utils }) {
    if (!isProduction()) return;
    await utils.cache.restore(STATE_DIR);
  },

  async onPostBuild({ constants, inputs }) {
    if (!isProduction()) return;
    // Serves https://<host>/<key>.txt, which IndexNow uses to verify ownership.
    await writeFile(join(constants.PUBLISH_DIR, `${inputs.key}.txt`), inputs.key);
  },

  async onSuccess({ constants, inputs, utils }) {
    if (!isProduction()) {
      console.log("IndexNow: skipped (not a production deploy)");
      return;
    }

    const { key, host, sitemapIndex } = inputs;
    const now = Date.now();

    let since = now - FALLBACK_WINDOW_MS;
    try {
      since = JSON.parse(await readFile(STATE_FILE, "utf8")).lastRun;
    } catch {
      console.log("IndexNow: no previous state, using a 24h window");
    }

    const entries = await collectUrls(constants.PUBLISH_DIR, sitemapIndex);
    const urlList = entries
      .filter((e) => Number.isFinite(e.lastmod) && e.lastmod > since)
      .map((e) => e.loc);

    if (urlList.length === 0) {
      console.log("IndexNow: no changed URLs");
    } else {
      for (let i = 0; i < urlList.length; i += BATCH_SIZE) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify({
            host,
            key,
            keyLocation: `https://${host}/${key}.txt`,
            urlList: urlList.slice(i, i + BATCH_SIZE),
          }),
        });
        if (!res.ok) {
          // Don't fail the deploy; keep the old timestamp so the next deploy retries.
          console.warn(`IndexNow: submission failed (${res.status})`);
          return;
        }
        console.log(`IndexNow: submitted batch (${res.status})`);
      }
      console.log(`IndexNow: submitted ${urlList.length} URLs`);
    }

    await mkdir(STATE_DIR, { recursive: true });
    await writeFile(STATE_FILE, JSON.stringify({ lastRun: now }));
    await utils.cache.save(STATE_DIR);
  },
};
