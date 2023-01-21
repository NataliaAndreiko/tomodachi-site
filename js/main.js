const mobileOpen = document.getElementById('mobile-cta')
    nav = document.querySelector('nav')
    mobileExit = document.getElementById('mobile-exit');

mobileOpen.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})