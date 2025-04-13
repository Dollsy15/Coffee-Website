const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");
const body = document.body;

menuOpenButton.addEventListener("click", () => {
  body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  body.classList.remove("show-mobile-menu");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    body.classList.remove("show-mobile-menu");
  });
});

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25, 

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});
