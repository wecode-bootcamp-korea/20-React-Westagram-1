import React from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';

import {
  faPaperPlane,
  faCompass,
  faHeart,
  // faEllipsisH,
  faComment,
  faBookmark,
  faSmile,
} from '@fortawesome/free-regular-svg-icons';

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        {/* <!-- main page top nav --> */}
        <nav className="page_top_nav">
          <div>
            <h1 className="page_name">westagram</h1>
            <div className="search">
              <div>
                {/* <i className="fas fa-search icon"></i> */}
                <FontAwesomeIcon
                  icon={faSearch}
                  className="fas fa-search icon"
                />
                <input type="text" placeholder="검색" />
              </div>
            </div>
            <div className="icon_right">
              {/* <i className="fas fa-home icon"></i>
            <i className="far fa-paper-plane icon"></i>
            <i className="far fa-compass icon"></i>
            <i className="far fa-heart icon"></i> */}
              <FontAwesomeIcon icon={faHome} className="fas fa-home icon" />
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="far fa-paper-plane icon"
              />
              <FontAwesomeIcon
                icon={faCompass}
                className="far fa-compass icon"
              />
              <FontAwesomeIcon icon={faHeart} className="far fa-heart icon" />
              <img
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/35986726_903848573151322_399536158729568256_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=oGlfWXPE-bcAX9atN7M&edm=ABfd0MgAAAAA&ccb=7-4&oh=f611f5be4a0ab8559d5e52a25ec6441e&oe=60A9E126&_nc_sid=7bff83"
                alt="나의 프로필 사진"
              />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
