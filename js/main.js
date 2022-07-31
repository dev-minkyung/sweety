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


/* event Silde */
const eventArea = new Swiper('.event-area', {
  slidesPerView: 1,
  spaceBetween: 24,
  centeredSlides: true,

  autoplay: {
    delay: 5000,
  },
  loop: true,

  navigation: {
    nextEl: ".event-button-next",
    prevEl: ".event-button-prev",
  },

  paisination: {
    el: '.event .swiper-pagination',
    clickable: true
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },

    1025: {
      slidesPerView: 3,
    },
  }
});



/* .donation 스크롤양에 맞춰 숫자 애니메이션 구현하기 (Number animation by Scroll) */
let executed = false;

window.addEventListener('scroll', function() {

  const y = window.scrollY // 스크롤 위치 계산하는 변수
  const scrollTrigger = document.querySelector('.donation').offsetTop - 400  //스크롤 애니메이션 줄 위치

  if(!executed) { // if(execute == false)와 같음
    if(y >= scrollTrigger) {
      const numAni = document.querySelectorAll('.num-ani');
  
      function changeNum(idx){
        let num = 0;
        let targetNum = numAni[idx].getAttribute('data-rate');
        let intervalTime = 10;
  
        //data-rate 속성값이 500보다 크면 시간을 0.005초로 바꿈.
        if(targetNum > 500){
          intervalTime = 0.0001;
        } 
        
        // num-ani 클래스 인덱스마다 data-rate 속성값만큼 숫자 카운트 애니메이션 효과주기
        let timer = setInterval(function(){
          ++num;
          numAni[idx].innerText = num;
          if(num == targetNum){
            clearInterval(timer);
          }
        }, intervalTime);
      }
  
      for(let i = 0; i < numAni.length; i++){
        changeNum(i);
      }

      executed = true;
    } //if 조건문
  } // executed if
});





/* 숫자 카운트 애니메이션 
const numAni = document.querySelectorAll('.num-ani');

function changeNum(idx){
  let num = 0;
  let targetNum = numAni[idx].getAttribute('data-rate');
  let intervalTime = 10;

  //data-rate 속성값이 500보다 크면 시간을 0.005초로 바꿈.
  if(targetNum > 500){
    intervalTime = 0.0001;
  } 
  
  // num-ani 클래스 인덱스마다 data-rate 속성값만큼 숫자 카운트 애니메이션 효과주기
  let timer = setInterval(function(){
    ++num;
    numAni[idx].innerText = num;
    if(num == targetNum){
      clearInterval(timer);
    }
  }, intervalTime);
}

for(let i = 0; i < numAni.length; i++){
  changeNum(i);
}
*/
