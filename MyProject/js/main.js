// Simple mobile menu toggle
const menuButton = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-nav');

menuButton.onclick = function() {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}