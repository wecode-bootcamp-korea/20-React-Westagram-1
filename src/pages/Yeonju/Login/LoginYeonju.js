import React from 'react';
import { withRouter } from 'react-router-dom';

import './LoginYeonju.scss';

class LoginYeonju extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      isActive: false,
    };
  }
  goToMain = () => {
    this.props.history.push('/main-yeonju');
  };

  handleIdInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  changeButton = () => {
    const { idValue, pwValue } = this.state;
    this.setState({ isActive: idValue.includes('@') && pwValue.length >= 5 });
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
              onChange={this.handleIdInput}
              onKeyUp={this.changeButton}
              name="idValue"
            />
            <input
              className="pwInput"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleIdInput}
              onKeyUp={this.changeButton}
              name="pwValue"
            />
            <button
              type="button"
              onClick={this.goToMain}
              className={'btn' + (this.state.isActive ? 'Active' : 'Disabled')}
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
