import React from 'react';
import './LoginYeonju.scss';
import { withRouter } from 'react-router-dom';

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
    this.props.history.push('/mainyeonju');
  };

  handleIdInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  changeButton = () => {
    const { idValue, pwValue } = this.state;
    idValue.includes('@') && pwValue.length >= 5
      ? this.setState({ isActive: true })
      : this.setState({ isActive: false });
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
