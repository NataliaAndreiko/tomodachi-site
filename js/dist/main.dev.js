"use strict";

var mobileOpen = document.getElementById('mobile-cta');
nav = document.querySelector('nav');
mobileExit = document.getElementById('mobile-exit');
mobileOpen.addEventListener('click', function () {
  nav.classList.add('menu-btn');
});
mobileExit.addEventListener('click', function () {
  nav.classList.remove('menu-btn');
});
//# sourceMappingURL=main.dev.js.map
