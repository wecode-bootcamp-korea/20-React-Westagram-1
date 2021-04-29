import React from 'react';
import Btn from './Components/Btn/Btn';
import IdPw from './Components/IdPw/IdPw';
import './Login.scss';

class LoginHwisung extends React.Component {
  //class productList
  render() {
    return (
      <article class="Login">
        <header class="logo">Instagram</header>
        <IdPw />
        <Btn />
        {/* a태그는 이동후 새로고침, link 페이지내에서 전환 */}
        {/* <Link to ="/Main">메인페이지로</Link> */}
        <footer class="forgot">비밀번호를 잊으셨나요?</footer>
      </article>
    );
  }
}

export default LoginHwisung;
// withRouter는 함수 ,인풋으로 컴포넌트를 받고 ,
// 아웃풋으로 인자를 받은 컴포넌트에 페이지 이동기능을 추가한 컴포넌트를 반환한다
