import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginHwisung extends React.Component {
  constructor() {
    super();
    this.state = {
      inputId: '',
      inputPw: '',
      btnOnOff: 'LoginBtn',
    };
  }

  goToMain = () => {
    console.log('clicked');
    fetch('http://10.58.3.66:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.inputId,
        password: this.state.inputPw,
        name: '김휘성',
        nickname: 'we휘성',
        phone_number: '01015411541',
        age: 25,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'SUCCESS') {
          localStorage.setItem('token', result.token);
          this.props.history.push('/main-hwisung');
        } else {
          alert('아이디나 비밀번호를 확인해주세요!!');
        }
      });
  };

  handleIdInput = event => {
    this.setState({
      inputId: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      inputPw: event.target.value,
    });
  };

  InvalidCheck = () => {
    this.state.inputId.includes('@') && this.state.inputPw.length > 4
      ? this.setState({ btnOnOff: 'LoginBtnOn' })
      : this.setState({ btnOnOff: 'LoginBtn' });
  };

  render() {
    return (
      <article className="Login">
        <header className="Logo">Instagram</header>
        <input
          className="IdInput"
          type="text"
          placeholder="전화번호, 사용자이름 또는 이메일"
          onChange={this.handleIdInput}
          onKeyUp={this.InvalidCheck}
        />
        <input
          className="PwInput"
          type="password"
          placeholder="비밀번호"
          onChange={this.handlePwInput}
          onKeyUp={this.InvalidCheck}
        />
        <input
          className={this.state.btnOnOff}
          id="loginBtn"
          type="button"
          value="로그인"
          onClick={this.goToMain}
        />
        <footer class="forgot">비밀번호를 잊으셨나요?</footer>
      </article>
    );
  }
}

export default withRouter(LoginHwisung);
