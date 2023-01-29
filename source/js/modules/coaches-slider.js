const coachesSection = document.querySelector('.coaches');
const coachesSwiper = document.querySelector('.coaches__swiper');

if (coachesSection && coachesSwiper) {
  const coachesSlider = new Swiper('.coaches__swiper', {

    loop: true,

    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.coaches__button-next',
      prevEl: '.coaches__button-prev',
    },
  });
}
