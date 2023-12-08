const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

// 사용되는 오브젝트 변수 지정
const inputUserEmail = document.querySelector('.user-email-input');
const inputUserPwd = document.querySelector('.user-password-input');
const btnLogin = document.querySelector('.btn-login');

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// input 값 확인하는 로직은 똑같아서 함수로 만들어 봄.
const inputEvent = (node) => {
  node.addEventListener('input', (e) => {
    let value = e.target.value;

    if (value === '') {
      e.target.classList.remove('is--invalid');
    } else {
      emailReg(value)
        ? e.target.classList.remove('is--invalid')
        : e.target.classList.add('is--invalid');
    }
  });
};

// 이메일 입력 이벤트
inputEvent(inputUserEmail);

// 비밀번호 입력 이벤트
inputEvent(inputUserPwd);

// 로그인 버튼 이벤트
btnLogin.addEventListener('click', (e) => {
  e.preventDefault(); // 클릭했을 때 submit이벤트가 발생해서 일단 꺼버림.
  let valueUserEmail = inputUserEmail.value;
  let valueUserPwd = inputUserPwd.value;

  // 로그인 조건 처리
  if (valueUserEmail === '') {
    alert('아이디 입력안함.');
  } else if (valueUserPwd === '') {
    alert('비밀번호 입력안함.');
  } else if (valueUserEmail !== user.id) {
    alert('없는 ID임.');
  } else if (valueUserPwd !== user.pw) {
    alert('없는 비밀번호임.');
  } else if (valueUserEmail === user.id && valueUserPwd === user.pw) {
    window.location.href = 'welcome.html';
  }
});
