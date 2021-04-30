import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../../Styles/Yeseul/reset.scss';
import '../../../Styles/Yeseul/common.scss';
import './Login.scss';

class LoginYeseul extends React.Component {
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
    return (
      <main className="login give-border">
        <h1 className="logo">westagram</h1>
        <form className="login-form">
          <div className="login-form__input-box js-input-box">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={this.state.valueId}
              className="js-input-id"
              onChange={this.handleIdInput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={this.state.valuePw}
              className="js-input-pw"
              onChange={this.handlePwInput}
            />
          </div>
          <button
            type="button"
            className="js-login-btn"
            onClick={this.goToMain}
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
