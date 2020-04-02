var shell = require('shelljs');

// Copy js to assets dir
shell.rm('-rf', 'assets/js/vendor/@h-enk/wpglossary');
shell.mkdir('-p', 'assets/js/vendor/@h-enk/wpglossary');
shell.cp('-R', 'node_modules/@h-enk/wpglossary/assets/js/scroll-lock.min.js', 'assets/js/vendor/@h-enk/wpglossary/scroll-lock.min.js');
shell.cp('-R', 'node_modules/@h-enk/wpglossary/assets/js/construct.js', 'assets/js/vendor/@h-enk/wpglossary/construct.js');

shell.rm('-rf', 'assets/js/vendor/lazysizes');
shell.mkdir('-p', 'assets/js/vendor/lazysizes');
shell.cp('-R', 'node_modules/lazysizes/lazysizes.min.js', 'assets/js/vendor/lazysizes/lazysizes.min.js');

// Copy js to static dir
shell.rm('-rf', 'static/js/vendor/jquery');
shell.mkdir('-p', 'static/js/vendor/jquery');
shell.cp('-R', 'node_modules/jquery/dist/jquery.min.js', 'static/js/vendor/jquery/jquery.min.js');

shell.rm('-rf', 'static/js/vendor/jquery-migrate');
shell.mkdir('-p', 'static/js/vendor/jquery-migrate');
shell.cp('-R', 'node_modules/jquery-migrate/dist/jquery-migrate.min.js', 'static/js/vendor/jquery-migrate/jquery-migrate.min.js');

shell.rm('-rf', 'static/js/vendor/ga-lite');
shell.mkdir('-p', 'static/js/vendor/ga-lite');
shell.cp('-R', 'node_modules/ga-lite/dist/ga-lite.min.js', 'static/js/vendor/ga-lite/ga-lite.min.js');

// Copy images to static dir
shell.rm('-rf', 'static/assets/images');
shell.mkdir('-p', 'static/assets/images', 'static/assets/images/icons');
shell.cp('-R', 'node_modules/@h-enk/wpglossary/assets/images/icon-pattern.svg', 'static/assets/images/icon-pattern.svg');
shell.cp('-R', 'node_modules/@h-enk/wpglossary/assets/images/icons/*', 'static/assets/images/icons');

shell.echo('Dependencies copied.');