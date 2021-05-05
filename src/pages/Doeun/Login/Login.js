import React from 'react';
import LoginBox from './Components/LoginBox/LoginBox';
import Footer from './Components/Footer/Footer';
import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <div className="loginDoeun">
        <div className="flexcontainer">
          <div className="iphone">
            <img alt="mobile instagram" src="images/Doeun/iphone.png" />
            <div className="screen"></div>
          </div>
          <div className="defaultBox">
            <LoginBox />
            <div className="signupBox">
              <p>
                계정이 없으신가요? <span>가입하기</span>
              </p>
            </div>
            <div className="download">
              <p>앱을 다운로드하세요.</p>
              <img alt="download in appstore" src="images/Doeun/appstore.png" />
              <img
                alt="download in googleplay"
                src="images/Doeun/googleplay.png"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
