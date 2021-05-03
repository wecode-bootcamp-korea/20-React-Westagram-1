import React from 'react';
// import Btn from './Components/Btn/Btn';
// import IdPw from './Components/IdPw/IdPw';
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
    this.props.history.push('/Main'); //컴포넌트가 아니라 경로
  };

  handleIdInput = event => {
    this.setState({
      InputId: `${event.target.value}`,
    });
  };

  handlePwInput = event => {
    this.setState({
      InputPw: `${event.target.value}`,
    });
  };

  InvalidCheck = () => {
    this.state.InputId.includes('@') && this.state.InputPw.length > 4
      ? this.setState({ BtnOnOff: 'LoginBtnOn' })
      : this.setState({ BtnOnOff: 'LoginBtn' });
  };

  render() {
    return (
      <article class="Login">
        <header class="logo">Instagram</header>
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
        {/* a태그는 이동후 새로고침, link 페이지내에서 전환 */}
        {/* <Link to ="/Main">메인페이지로</Link> */}
        <footer class="forgot">비밀번호를 잊으셨나요?</footer>
      </article>
    );
  }
}

export default withRouter(LoginHwisung);
// withRouter는 함수 ,인풋으로 컴포넌트를 받고 ,
// 아웃풋으로 인자를 받은 컴포넌트에 페이지 이동기능을 추가한 컴포넌트를 반환한다
