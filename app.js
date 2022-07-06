const menu = document.querySelector('#mobile-menu') //target to index.html line 14
const menuLinks = document.querySelector('.navbar__menu') 

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})