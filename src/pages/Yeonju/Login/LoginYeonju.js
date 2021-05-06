import React from 'react';
import { withRouter } from 'react-router-dom';

import './LoginYeonju.scss';

class LoginYeonju extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      isLoginBtnActive: false,
    };
  }

  // goToMain = e => {
  //   this.props.history.push('/main-yeonju');
  // };

  goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.6.40:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue,
        account: '',
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.props.history.push('/main-yeonju');
        } else {
          alert('wrong!!!');
        }
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  changeButton = () => {
    const { idValue, pwValue } = this.state;
    this.setState({
      isLoginBtnActive: idValue.includes('@') && pwValue.length >= 5,
    });
  };

  render() {
    return (
      <div className="LoginYeonju">
        <div className="outbox">
          <header className="westagram"> Westagram </header>
          <form className="id_pw">
            <input
              className="idInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleInput}
              onKeyUp={this.changeButton}
              name="idValue"
            ></input>
            <input
              className="pwInput"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInput}
              onKeyUp={this.changeButton}
              name="pwValue"
            ></input>
            <button
              type="button"
              onClick={this.goToMain}
              className={
                'btn' + (this.state.isLoginBtnActive ? 'Active' : 'Disabled')
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
