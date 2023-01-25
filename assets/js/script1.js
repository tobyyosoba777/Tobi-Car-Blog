const toggleButton = document.getElementsByClassName('options')[0]
const navbarLinks = document.getElementsByClassName('menu-bar')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})