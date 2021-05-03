import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../../Styles/Yeseul/reset.scss';
import '../../../Styles/Yeseul/common.scss';
import './Login.scss';

class LoginYeseul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputId: '',
      inputPw: '',
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {});
  };

  goToMain = () => {
    this.props.history.push('/main-yeseul');
  };

  render() {
    const { inputId, inputPw } = this.state;
    const checkId = /^\w[\w\-.]*@\w+\.\w{2,}/;

    return (
      <main className="login give-border">
        <h1 className="logo">westagram</h1>
        <form className="login-form">
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
            type="button"
            onClick={this.goToMain}
            disabled={!(checkId.test(inputId) && inputPw.length > 5)}
          >
            로그인
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
