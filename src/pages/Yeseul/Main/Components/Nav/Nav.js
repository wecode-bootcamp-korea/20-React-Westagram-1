/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withRouter } from 'react-router-dom';
import IconButton from '../Button/IconButton';
import './Nav.scss';

class Nav extends React.Component {
  goToMain() {
    this.props.history.push('/main');
  }

  render() {
    return (
      <nav>
        <div className="inner-nav">
          <h1>
            <IconButton
              className="like-button"
              info={{ name: 'logo', fileName: 'instagram.svg' }}
            >
              <span className="logo">westagram</span>
            </IconButton>
          </h1>
          <form className="nav__search">
            <input type="search" placeholder="검색" />
          </form>
          <ul className="nav__menu">
            <li>
              <a href="https://www.instagram.com/explore/">
                <img
                  alt="탐색"
                  src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                />
              </a>
            </li>
            <li>
              <button type="button" className="like-button">
                <img
                  alt="좋아요"
                  src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                />
              </button>
            </li>
            <li>
              <button type="button" className="like-button">
                <img
                  alt="마이페이지"
                  src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
