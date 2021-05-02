import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../../Styles/Yeseul/reset.scss';
import '../../../Styles/Yeseul/common.scss';
import './Login.scss';

class LoginYeseul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueId: '',
      valuePw: '',
    };
  }

  handleIdInput = e => {
    this.setState({ valueId: e.target.value });
  };

  handlePwInput = e => {
    this.setState({ valuePw: e.target.value });
  };

  goToMain = () => {
    this.props.history.push('/main-yeseul');
  };

  render() {
    const { valueId, valuePw } = this.state;
    const checkId = /^\w[\w\-.]*@\w+\.\w{2,}/;

    return (
      <main className="login give-border">
        <h1 className="logo">westagram</h1>
        <form className="login-form">
          <div className="login-form__input-box">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={valueId}
              onChange={this.handleIdInput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={valuePw}
              onChange={this.handlePwInput}
            />
          </div>
          <button
            type="button"
            onClick={this.goToMain}
            disabled={!(checkId.test(valueId) && valuePw.length > 5)}
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
