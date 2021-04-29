import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './LoginBox.scss';

function LoginBox({ history }) {
  function goToMain() {
    history.push('/main-doeun');
  }

  //로그인 버튼 활성화
  let [id, resetId] = useState('');
  let [pswd, resetPswd] = useState('');

  //비밀번호 표시/숨김 버튼
  const [type, resetType] = useState('password');

  function showPassword() {
    type === 'password' ? resetType('text') : resetType('password');
  }

  let [warning, resetWarning] = useState('');

  const validId = /\W/;
  function checkValidation() {
    if (validId.exec(id) || pswd !== 'wecode') {
      resetWarning(
        <p>
          아이디는 영문, 숫자, '_'로 구성되어야 합니다.
          <br />
          패스워드는 'wecode'입니다."
        </p>
      );
      return false;
    }
  }

  return (
    <div className="loginBox">
      <div className="logo">
        <h1 onClick={goToMain}>westagram</h1>
      </div>
      <div className="login">
        <form action="/main-doeun" onSubmit={checkValidation}>
          <div>
            <label htmlFor="id" className={id && 'typing'}>
              전화번호, 사용자 이름 또는 이메일
            </label>
            <input
              className={id && 'typing'}
              onInput={e => {
                resetId(e.target.value);
              }}
              type="text"
              id="id"
              name="id"
            />
          </div>
          <div>
            <input
              className={pswd && 'typing'}
              onInput={e => {
                resetPswd(e.target.value);
              }}
              type={type}
              id="pw"
              name="pw"
            />
            <label htmlFor="pw" className={pswd && 'typing'}>
              비밀번호
            </label>
            <p
              className={pswd ? 'showPw show' : 'showPw'}
              onClick={showPassword}
            >
              {type === 'password' ? '비밀번호 표시' : '숨기기'}
            </p>
          </div>
          <div>
            <button
              className={
                id && pswd.length >= 6 ? 'loginBtn active' : 'loginBtn'
              }
              disabled={id && pswd.length >= 6 ? false : true}
            >
              로그인
            </button>
          </div>
        </form>
        <div className="or">
          <div className="line"></div>
          <p>또는</p>
          <div className="line"></div>
        </div>
        <div className="facebook">
          <a>
            <img alt="facebook logo" src="images/Doeun/facebook.png" />
            Facebook으로 로그인
          </a>
        </div>
      </div>
      <div className="invalid">{warning}</div>
      <div className="forgot">
        <a>비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default withRouter(LoginBox);
