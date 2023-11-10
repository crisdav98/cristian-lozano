document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper', {
        // speed: 400,
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
          },
    });

})