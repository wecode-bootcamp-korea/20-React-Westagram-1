import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <>
        <nav class="Nav">
          <div class="insta_logo">
            <img
              class="insta"
              src="/images/Hwisung/instagram.png"
              alt="인스타"
            />
            <span class="logo">Instagram</span>
          </div>
          <div class="search_act">
            <img class="search" src="/images/Hwisung/search.png" alt="검색" />
            <input class="search_bar" type="text" placeholder="검색" />
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