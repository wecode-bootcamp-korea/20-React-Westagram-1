import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <ul>
          <div>
            {FOOTER_DATA1.slice(0, 10).map(e => (
              <li>{e}</li>
            ))}
          </div>
          <div>
            {FOOTER_DATA1.slice(11).map(e => (
              <li>{e}</li>
            ))}
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

const FOOTER_DATA1 = [
  '소개',
  '블로그',
  '채용 정보',
  '도움말',
  'API',
  '개인정보처리방침',
  '약관',
  '인기 계정',
  '해시태그',
  '위치',
  '뷰티',
  '댄스 및 공연',
  '피트니스',
  '식음료',
  '집 및 정원',
  '음악',
  '시각 예술',
];
