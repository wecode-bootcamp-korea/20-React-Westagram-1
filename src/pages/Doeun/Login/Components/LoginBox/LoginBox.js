import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './LoginBox.scss';

class LoginBox extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      type: 'password',
      warning: '',
      validId: /\W/,
    };
  }

  handleInputId = e => {
    this.setState({ id: e.target.value });
  };

  handleInputPw = e => {
    this.setState({ pw: e.target.value });
  };

  goToMain = () => {
    this.props.history.push('/main-doeun');
  };

  showPassword = () => {
    this.state.type === 'password'
      ? this.setState({ type: 'text' })
      : this.setState({ type: 'password' });
  };

  checkValidation = () => {
    if (this.state.validId.exec(this.state.id) || this.state.pw !== 'wecode') {
      this.setState({
        warning: (
          <p>
            아이디는 영문, 숫자, '_'로 구성되어야 합니다.
            <br />
            패스워드는 'wecode'입니다."
          </p>
        ),
      });
      return false;
    }
  };

  render() {
    const { id, pw, type, warning, validId } = this.state;

    return (
      <div className="loginBox">
        <div className="logo">
          <h1 onClick={this.goToMain}>westagram</h1>
        </div>
        <div className="login">
          <form action="/main-doeun" onSubmit={this.checkValidation}>
            <div>
              <label htmlFor="id" className={id ? 'typing' : ''}>
                전화번호, 사용자 이름 또는 이메일
              </label>
              <input
                className={id ? 'typing' : ''}
                onInput={this.handleInputId}
                type="text"
                id="id"
                name="id"
              />
            </div>
            <div>
              <input
                className={pw ? 'typing' : ''}
                onChange={this.handleInputPw}
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
                disabled={id && pw.length >= 6 ? false : true}
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
}

export default withRouter(LoginBox);
