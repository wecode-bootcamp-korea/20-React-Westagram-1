import React from 'react';
import { withRouter } from 'react-router-dom';
import { API } from '../config.js';
import './LoginYeonju.scss';

class LoginYeonju extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  goToMain = e => {
    this.props.history.push('/main-yeonju');
  };

  // goToMain = e => {
  //   e.preventDefault();
  //   fetch('http://10.58.6.40:8000/user/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: this.state.idValue,
  //       password: this.state.pwValue,
  //       account: '',
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       if (res.message === 'SUCCESS') {
  //         localStorage.setItem('token', res.token);
  //         this.props.history.push('/main-yeonju');
  //       } else {
  //         alert('wrong!!!');
  //       }
  //     });
  // };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { idValue, pwValue } = this.state;

    return (
      <div className="loginYeonju">
        <div className="outbox">
          <header className="westagram"> Westagram </header>
          <form className="id_pw" onSubmit={this.goToMain}>
            <input
              className="idInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleInput}
              name="idValue"
            />
            <input
              className="pwInput"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInput}
              name="pwValue"
            />
            <button
              type="submit"
              className={`btn${
                idValue.includes('@') && pwValue.length >= 5
                  ? 'Active'
                  : 'Disabled'
              }`}
              disabled={
                idValue.includes('@') && pwValue.length >= 5 ? false : true
              }
            >
              로그인
            </button>
          </form>
          <footer>비밀번호를 잊으셨나요?</footer>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginYeonju);
