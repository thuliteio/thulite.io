! function() {
  "use strict";
  /*
  let e = document.querySelector(".header-nav");
  var s, n = 0;
  const t = {
      pinned: "header-nav-pinned",
      unpinned: "header-nav-unpinned"
  };

  function i() {
      (s = window.pageYOffset) < n ? e.classList.contains(t.unpinned) && (e.classList.remove(t.unpinned), e.classList.add(t.pinned)) : n < s && 1 <= window.scrollY && (!e.classList.contains(t.pinned) && e.classList.contains(t.unpinned) || (e.classList.remove(t.pinned), e.classList.add(t.unpinned))), n = s
  }
  let o = document.querySelector(".scroll-to-top");
  o.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      })
  }), window.addEventListener("load", function() {
      Lightense(".content img", {
          offset: 200,
          zIndex: 2147483647
      }), window.onscroll = function() {
          i(), 300 <= window.scrollY ? e.classList.add("header-sticky-top") : e.classList.remove("header-sticky-top"), 500 <= window.scrollY ? o.classList.add("shown") : o.classList.remove("shown")
      }
  }, !1); {
      let s = document.querySelector(".search-block"),
          n = document.querySelector(".search-overlay"),
          e = document.querySelectorAll('[data-toggle="search"]'),
          t = document.querySelectorAll('[data-toggle="search-close"]');
      e.forEach(e => {
          e.addEventListener("click", function() {
              s.classList.add("is-visible"), n.classList.add("is-visible"), setTimeout(() => {
                  document.querySelector('[aria-label="search-query"]').focus()
              }, 250)
          })
      }), t.forEach(e => {
          e.addEventListener("click", function() {
              s.classList.remove("is-visible"), n.classList.remove("is-visible"), document.querySelector('[aria-label="search-query"]').value = ""
          })
      })
  }
  */
  document.querySelector(".navbar-toggler").addEventListener("click", function(e) {
      this.classList.toggle("toggle-menu")
  })
}();
