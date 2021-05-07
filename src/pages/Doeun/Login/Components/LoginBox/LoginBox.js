import React from 'react';
import { withRouter } from 'react-router-dom';
import Main from '../../../Main/Main';
import './LoginBox.scss';

class LoginBox extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      type: 'password',
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleInputPw = e => {
    this.setState({ pw: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch('http://10.58.0.184:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE == 'SUCCESS') {
          localStorage.setItem('token', res.token);
          this.goToMain();
        } else {
          alert('아이디, 패스워드를 확인하세요.');
        }
      });
  };

  goToMain = () => {
    this.props.history.push('/main-doeun');
  };

  showPassword = () => {
    const { type } = this.state;
    this.setState({ type: type === 'password' ? 'text' : 'password' });
  };

  render() {
    const { id, pw, type, warning, validId } = this.state;
    const regExp = /\W/;
    const isInputValid =
      regExp.exec(this.state.id) || this.state.pw !== 'wecode';

    return (
      <div className="loginBox">
        <div className="logo">
          <h1 onClick={this.goToMain}>westagram</h1>
        </div>
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="id" className={id ? 'typing' : ''}>
                전화번호, 사용자 이름 또는 이메일
              </label>
              <input
                className={id ? 'typing' : ''}
                onInput={this.handleInput}
                type="text"
                id="id"
                name="id"
              />
            </div>
            <div>
              <input
                className={pw ? 'typing' : ''}
                onChange={this.handleInput}
                type={type}
                id="pw"
                name="pw"
              />
              <label htmlFor="pw" className={pw ? 'typing' : ''}>
                비밀번호
              </label>
              <p
                className={'showPw ' + (pw ? 'show' : '')}
                onClick={this.showPassword}
              >
                {type === 'password' ? '비밀번호 표시' : '숨기기'}
              </p>
            </div>
            <div>
              <button
                className={`loginBtn ${id && pw.length >= 6 ? 'active' : ''}`}
                disabled={!id && pw.length >= 6}
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
            <img alt="facebook logo" src="images/Doeun/facebook.png" />
            Facebook으로 로그인
          </div>
        </div>
        <div className="invalid">
          {id && pw && isInputValid && (
            <p>
              아이디는 영문, 숫자, '_'로 구성되어야 합니다.
              <br />
              패스워드는 'wecode'입니다."
            </p>
          )}
        </div>
        <div className="forgot">비밀번호를 잊으셨나요?</div>
      </div>
    );
  }
}

export default withRouter(LoginBox);
