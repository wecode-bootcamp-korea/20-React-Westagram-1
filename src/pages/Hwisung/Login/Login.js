import React from 'react';
import './Login.scss';
import { Link, withRouter } from 'react-router-dom';

class LoginHwisung extends React.Component {
  //class productList
  goToMain = () => {
    this.props.history.push('/MainHwisung');
  };

  render() {
    return (
      <article class="Login">
        <header class="logo">Instagram</header>
        <input
          class="id_input"
          type="text"
          placeholder="전화번호, 사용자이름 또는 이메일"
        />
        <input class="pw_input" type="password" placeholder="비밀번호" />
        <input
          class="LoginBtn"
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
