document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.querySelector('.menu-links');
    menuToggle.addEventListener('click', () => {
        if (menuLinks.style.display === "none" || menuLinks.style.display === "") {
            menuLinks.style.display = 'block';
            menuToggle.innerHTML = '<i class="fa-solid fa-close"></i>';
        } else {
            menuLinks.style.display = 'none';
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    })
})