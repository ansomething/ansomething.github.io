// || OPEN AND CLOSE MOBILE MENU BAR
const initApp = () => {
    const openBtn = document.getElementById("open-btn");
    const closeBtn = document.getElementById("close-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuLinks = document.getElementById("menu-links");

    const toggleMenu = () => {
        mobileMenu.classList.toggle("mobile-menu__nav-dropdown--hidden");
        mobileMenu.classList.toggle("mobile-menu__nav-dropdown--flex");
        openBtn.classList.toggle("mobile-menu__open-btn--hidden");
    }

    openBtn.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);
    menuLinks.addEventListener("click", toggleMenu);
}

document.addEventListener("DOMContentLoaded", initApp);