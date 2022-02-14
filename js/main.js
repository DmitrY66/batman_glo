const swiper = new Swiper('.main__slider', {

  slidesPerView: 2,

  spaceBetween: 30,
  
  loop: true,

  navigation: {
    nextEl: '.main__slider-arrow',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  }

});

const headerMenuBurger = document.querySelector('.header__menu-burger');
const headerMenuClose = document.querySelector('.header__menu-close');
const header = document.querySelector('.header');

headerMenuBurger.addEventListener('click', () => {
  header.style.display = 'block';
})
headerMenuClose.addEventListener('click', () => {
  header.style.display = 'none';
})