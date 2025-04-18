document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.professional-nav');

    hamburgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('open');
    });
});