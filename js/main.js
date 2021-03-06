const swiper = new Swiper('.main__slider', {

  slidesPerView: 2,

  spaceBetween: 30,

  loop: true,

  navigation: {
    nextEl: '.main__slider-arrow',
  },

  breakpoints: {
    120: {
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

const modal = document.querySelector('.modal');
const mainButtonPlay = document.querySelector('.main__button-play');

headerMenuBurger.addEventListener('click', () => {
  header.style.display = 'block';
})
headerMenuClose.addEventListener('click', () => {
  header.style.display = 'none';
})

mainButtonPlay.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('active');
})
modal.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner');
  if (!isModal) {
    modal.classList.remove('active');
  }
})