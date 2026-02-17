// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.parentElement.classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: false,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    slidesPerGroup: 1,
    slidesPerView: 1,
    centeredSlides: false,
    breakpoints: {
      520: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });

  // Crieur Slider
  // ----------------------------------------
  document.querySelectorAll(".crieur-slider").forEach((elm) => {
    new Swiper(elm, {
      spaceBetween: 24,
      loop: false,
      pagination: {
        el: ".crieur-slider-pagination",
        type: "bullets",
        clickable: true,
      },
      slidesPerGroup: 1,
      slidesPerView: 1,
      centeredSlides: false,
      breakpoints: {
        520: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  });
})();
