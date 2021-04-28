import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('./main');
  };

  render() {
    return (
      <div className="Login">
        <div className="outbox">
          <header className="westagram"> Westagram </header>
          <form className="id_pw">
            <input
              className="idInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input className="pwInput" type="password" placeholder="비밀번호" />
            <button type="button" onClick={this.goToMain}>
              로그인
            </button>
          </form>
          <footer>비밀번호를 잊으셨나요?</footer>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
