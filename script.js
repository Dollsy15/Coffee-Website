const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
const body = document.body;

menuOpenButton.addEventListener('click', () => {
    body.classList.add('show-mobile-menu');
});

menuCloseButton.addEventListener('click', () => {
    body.classList.remove('show-mobile-menu');
});
