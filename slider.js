const newSwiper = new Swiper(".js-swiper", {
    spaceBetween: 30,
    loop: true,
    slidesPerView: 2,
    navigation: {
      nextEl: ".js-arrow-prev",
      prevEl: ".js-arrow-next",
    },
  });
