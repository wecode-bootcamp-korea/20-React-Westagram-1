import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginHwisung extends React.Component {
  constructor() {
    super();
    this.state = {
      InputId: '',
      InputPw: '',
      BtnOnOff: 'LoginBtn',
    };
  }

  goToMain = () => {
    this.props.history.push('/main-hwisung');
    fetch('http://10.58.0.184:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.InputId,
        password: this.state.InputPw,
        nickname: '김휘성',
        phonenumber: '010-1541-1541',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'SUCCESS') {
          localStorage.setItem('token', result.token);
        } else {
          alert('아이디나 비밀번호를 확인해주세요!!');
        }
      });
  };

  handleIdInput = event => {
    this.setState({
      InputId: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      InputPw: event.target.value,
    });
  };

  InvalidCheck = () => {
    this.state.InputId.includes('@') && this.state.InputPw.length > 4
      ? this.setState({ BtnOnOff: 'LoginBtnOn' })
      : this.setState({ BtnOnOff: 'LoginBtn' });
  };

  render() {
    return (
      <article className="Login">
        <header className="logo">Instagram</header>
        <input
          className="id_input"
          type="text"
          placeholder="전화번호, 사용자이름 또는 이메일"
          onChange={this.handleIdInput}
          onKeyUp={this.InvalidCheck}
        />
        <input
          className="pw_input"
          type="password"
          placeholder="비밀번호"
          onChange={this.handlePwInput}
          onKeyUp={this.InvalidCheck}
        />
        <input
          className={this.state.BtnOnOff}
          id="LoginBtn"
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
