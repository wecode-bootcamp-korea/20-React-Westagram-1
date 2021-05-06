import React from 'react';
import './SideFooter.scss';

class SideFooter extends React.Component {
  constructor() {
    super();
    this.FOOTER_DATA = [
      '소개',
      '도움말',
      '홍보 센터',
      'API',
      '채용 정보',
      '개인정보처리방침',
      '약관',
      '위치',
      '인기 계정',
      '해시태그',
      '언어',
    ];
  }

  render() {
    return (
      <footer className="sidefooter">
        <ul>
          <div>
            {this.FOOTER_DATA.slice(0, 6).map(tag => (
              <li>{tag}</li>
            ))}
          </div>
          <div>
            {this.FOOTER_DATA.slice(6).map(tag => (
              <li>{tag}</li>
            ))}
          </div>
        </ul>
        <p>© 2021 Instagram from Facebook</p>
      </footer>
    );
  }
}

export default SideFooter;
