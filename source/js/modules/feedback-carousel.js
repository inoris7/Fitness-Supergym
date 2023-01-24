const feedbackSection = document.querySelector('.feedback');
const feedbackSwiper = document.querySelector('.feedback__swiper');

if (feedbackSection && feedbackSwiper) {
  const feedbackCarousel = new Swiper('.feedback__swiper', {

    loop: true,

    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      slideShadows: false,
      scale: 0.7,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.feedback__button-next',
      prevEl: '.feedback__button-prev',
    },
  });
}
