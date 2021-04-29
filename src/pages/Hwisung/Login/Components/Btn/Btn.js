import React from 'react';
import { withRouter } from 'react-router-dom';
import './Btn.scss';

class Btn extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main'); //컴포넌트가 아니라 경로
  };
  render() {
    return (
      <>
        <input class="pw_input" type="password" placeholder="비밀번호" />
        <input
          class="LoginBtn"
          id="LoginBtn"
          type="button"
          value="로그인"
          onClick={this.goToMain}
        />
      </>
    );
  }
}
export default withRouter(Btn);
