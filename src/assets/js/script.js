import "@/scss/style.scss";

import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Menu
const menuBtnElem = document.querySelector("[data-menu-btn]");
const mobileMenuElem = document.querySelector("[data-menu-mobile]");

function toggleMobileMenu() {
    mobileMenuElem.toggleAttribute("data-menu-mobile-active");
    mobileMenuElem.toggleAttribute("inert");
}

menuBtnElem.addEventListener("click", toggleMobileMenu);
mobileMenuElem.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        toggleMobileMenu();
    }
});

// Slider
const heroSlider = new Swiper("[data-hero-slider]", {
    modules: [Autoplay, Pagination],
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: "[data-hero-slider-pagination]",
        horizontalClass: "hero-slider__pagination",
        bulletClass: "hero-slider__bullet",
        bulletActiveClass: "hero-slider__bullet--active",
    },
});
