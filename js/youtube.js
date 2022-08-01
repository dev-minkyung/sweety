var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'uPfSuAqUcMY', // 최초 재생할 유튜브 영상 ID

    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'uPfSuAqUcMY' // 반복 재생할 유튜브 영상 ID 목록
    },
    
    events: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }

  });
}


const thisYear = document.querySelector('.this-year');
const thisYearMonth = document.querySelector('.this-year-month');
//thisYear.textContent = new Date().getFullYear().getMonth(); //올해의 연도가 입력됨.

const todayYear = new Date().getFullYear();
const todayMonth = new Date().getMonth() + 1;

const todayYYYYMM = todayYear + '년 ' + todayMonth + '월';

//thisYearMonth.textContent = todayYYYYMM;

document.querySelector(".this-year-month").innerHTML = todayYear + '<span class="date-text">년 </span>' + todayMonth + '<span class="date-text">월</span>';

/*
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //올해의 연도가 입력됨.
*/