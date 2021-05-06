import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginYeseul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputId: '',
      inputPw: '',
      loginMode: true,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  convertMode = () => {
    this.setState({
      loginMode: !this.state.loginMode,
    });
  };

  signIn = e => {
    const { inputId, inputPw } = this.state;
    e.preventDefault();
    fetch('http://10.58.6.252:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
      }),
    })
      .then(users => users.json())
      .then(users => {
        if (users.MESSAGE === 'SUCCESS') {
          this.setState({
            inputId: '',
            inputPw: '',
          });
          localStorage.setItem('token', users.ACCESS_TOKEN);
          this.props.history.push('/main-yeseul');
        } else if (users.MESSAGE === 'INVALID_USER') {
          const wantToSignUp = window.confirm(
            '잘못된 정보입니다. 회원가입하시겠습니까?'
          );
          wantToSignUp && this.convertMode();
        }
      });
  };

  signUp = e => {
    const { inputId, inputPw } = this.state;
    e.preventDefault();
    fetch('http://10.58.6.252:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
      }),
    })
      .then(users => users.json())
      .then(users => {
        if (users.MESSAGE === 'SUCCESS') {
          this.setState({
            inputId: '',
            inputPw: '',
          });
          alert(`회원가입되었습니다!🎉 로그인해주세요`);
          this.convertMode();
        } else {
          alert(users.MESSAGE);
        }
      });
  };

  render() {
    const { inputId, inputPw, loginMode } = this.state;
    const checkId = /^\w[\w\-.]*@\w+\.\w{2,}/;

    return (
      <main className="loginYeseul give-border">
        <h1 className="logo">westagram</h1>
        <form
          className="login-form"
          onSubmit={loginMode ? this.signIn : this.signUp}
        >
          <div className="login-form__input-box">
            <input
              type="text"
              name="inputId"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={inputId}
              onChange={this.handleInput}
            />
            <input
              type="password"
              name="inputPw"
              placeholder="비밀번호"
              value={inputPw}
              onChange={this.handleInput}
            />
          </div>
          <button
            type="submit"
            disabled={!(checkId.test(inputId) && inputPw.length > 8)}
          >
            {loginMode ? '로그인' : '회원가입'}
          </button>
        </form>
        <a
          href="https://www.instagram.com/accounts/password/reset/"
          className="find-pw"
        >
          비밀번호를 잊으셨나요?
        </a>
      </main>
    );
  }
}

export default withRouter(LoginYeseul);
