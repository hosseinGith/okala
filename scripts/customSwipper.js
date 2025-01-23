document.addEventListener("DOMContentLoaded", function () {
  // Swiper header slider
  const swiper = new Swiper(".swiper", {
    spaceBetween: 50,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: "custom-bullet",
      bulletActiveClass: "custom-bullet-active",
    },
  });

  // Swiper categories
  const swiperCategories = new Swiper(".swiperCategory", {
    breakpoints: {
      768: {
        spaceBetween: 5,
        slidesPerView: 7,
      },
      400: {
        spaceBetween: 50,
        slidesPerView: 5,
      },
      360: {
        spaceBetween: 2,
        slidesPerView: 4,
      },
      320: {
        spaceBetween: 2,
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiperCategory-pagination",
      clickable: true,
    },
  });

  // swiper for  products
  const swiperProducts = new Swiper(".swiperProducts", {
    breakpoints: {
      600: {
        spaceBetween: 70,
        slidesPerView: 5,
      },
      400: {
        spaceBetween: 35,
        slidesPerView: 3,
      },
      360: {
        spaceBetween: 70,
        slidesPerView: 3,
      },
      320: {
        spaceBetween: 2,
        slidesPerView: 2,
      },
    },
    loop: true,
    pagination: {
      el: ".swiperCategory-pagination",
      clickable: true,
    },
  });
});
