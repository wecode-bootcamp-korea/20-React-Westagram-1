import React from 'react';
import './SideFooter.scss';

class SideFooter extends React.Component {
  render() {
    return (
      <footer className="sidefooter">
        <ul>
          <div>
            <li>소개</li>
            <li>도움말</li>
            <li>홍보 센터</li>
            <li>API</li>
            <li>채용 정보</li>
            <li>개인정보처리방침</li>
          </div>
          <div>
            <li>약관</li>
            <li>위치</li>
            <li>인기 계정</li>
            <li>해시태그</li>
            <li>언어</li>
          </div>
        </ul>
        <p>© 2021 Instagram from Facebook</p>
      </footer>
    );
  }
}

export default SideFooter;
