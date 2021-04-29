import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <>
        <nav class="Nav">
          <div class="InstaLogo">
            <img
              class="InstaLogoImg"
              src="/images/Hwisung/instagram.png"
              alt="인스타"
            />
            <div class="InstaLogoFont">Instagram</div>
          </div>
          <div class="SearchBar">
            <img
              class="SearchBarImg"
              src="/images/Hwisung/search.png"
              alt="검색"
            />
            <input class="SearchBarBox" type="text" placeholder="검색" />
          </div>
          <div class="act">
            <img class="explore" src="/images/Hwisung/explore.png" alt="검색" />
            <img class="like" src="/images/Hwisung/like.png" alt="좋아요" />
            <img class="user" src="/images/Hwisung/user.png" alt="사용자" />
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
