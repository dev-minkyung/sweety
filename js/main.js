/* HEADER TOGGLE MENU */
const menuBtn = document.querySelector('.my-menu');
const menuList = document.querySelector('.main-menu');

menuBtn.addEventListener('click', function () {
  menuList.classList.toggle('active');
});

/* Header 스크롤 */
const header = document.querySelector(".header");

window.onscroll = function() {
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

/* Main View Silde */
const swiper = new Swiper('.main-view', {
  autoplay: {
    delay: 4500,
  },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

