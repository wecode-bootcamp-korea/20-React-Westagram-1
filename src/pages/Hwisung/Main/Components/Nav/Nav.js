import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <>
        <nav className="Nav">
          <div className="InstaLogo">
            <img
              className="InstaLogoImg"
              src="/images/Hwisung/instagram.png"
              alt="인스타"
            />
            <div className="InstaLogoFont">Instagram</div>
          </div>
          <div className="SearchBar">
            <img
              className="SearchBarImg"
              src="/images/Hwisung/search.png"
              alt="검색"
            />
            <input className="SearchBarBox" type="text" placeholder="검색" />
          </div>
          <div className="Act">
            <img
              className="Act_Explore"
              src="/images/Hwisung/explore.png"
              alt="검색"
            />
            <img
              className="Act_Like"
              src="/images/Hwisung/like.png"
              alt="좋아요"
            />
            <img
              className="Act_User"
              src="/images/Hwisung/user.png"
              alt="사용자"
            />
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
