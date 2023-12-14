/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
*/

const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const visual = document.querySelector('.visual img');
const nameText = document.querySelector('.nickName');
let audio; // 전역으로 audio 선언

const setBgColor = (index) => {
  body.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color
  })`;
}; // body의 배경 색상 변경 함수

const setImage = (index) => {
  visual.src = `./assets/${data[index - 1].name}.jpeg`;
  visual.alt = data[index - 1].alt;
}; // 'visual > img'의 src, alt 변경

const setNameText = (index) => {
  nameText.innerHTML = data[index - 1].name;
}; // 상단

const setAudio = (index) => {
  // audio 인스턴스가 이미 존재하면 일시 정지
  if (audio && audio.isPlaying()) {
    audio.stop();
  }

  // 새로운 audio 인스턴스를 생성
  audio = new AudioPlayer(`./assets/audio/${data[index - 1].name}.m4a`);

  audio.play();
};

// 클릭 이벤트(이벤트 위임)
const handleClick = ({ target }) => {
  const item = target.closest('li'); //
  const list = document.querySelectorAll('.nav li');

  if (!item) return;

  if (item) {
    let index = item.dataset.index;

    list.forEach((item) => {
      item.classList.remove('is-active');
    });

    item.classList.add('is-active');

    setBgColor(index);
    setImage(index);
    setNameText(index);
    setAudio(index);
  }
};

nav.addEventListener('click', handleClick);
