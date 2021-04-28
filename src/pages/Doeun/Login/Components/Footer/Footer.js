import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul>
          <div>
            <li>소개</li>
            <li>블로그</li>
            <li>채용 정보</li>
            <li>도움말</li>
            <li>API</li>
            <li>개인정보처리방침</li>
            <li>약관</li>
            <li>인기 계정</li>
            <li>해시태그</li>
            <li>위치</li>
          </div>
          <div>
            <li>뷰티</li>
            <li>댄스 및 공연</li>
            <li>피트니스</li>
            <li>식음료</li>
            <li>집 및 정원</li>
            <li>음악</li>
            <li>시각 예술</li>
          </div>
        </ul>
        <form>
          <select>
            <option>한국어</option>
            <option>English</option>
          </select>
        </form>
        <p>© 2021 Instagram from Facebook</p>
      </footer>
    );
  }
}

export default Footer;
