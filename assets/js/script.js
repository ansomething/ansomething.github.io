// || OPEN AND CLOSE MOBILE MENU BAR
const initApp = () => {
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuLinks = document.getElementById("menuLinks");

    const toggleMenu = () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");
        openBtn.classList.toggle("hidden");
    }

    openBtn.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);
    menuLinks.addEventListener("click", toggleMenu);
}

document.addEventListener("DOMContentLoaded", initApp);