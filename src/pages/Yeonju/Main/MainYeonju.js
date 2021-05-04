import React from 'react';
import './MainYeonju.scss';

import Nav from './Components/Nav/Nav';
import Upload from './Components/Upload/Upload';
import Stories from './Components/Stories/Stories';
import Aside from './Components/Aside/Aside';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';

// import {
//   faPaperPlane,
//   faCompass,
//   faHeart,
//   // faEllipsisH,
//   faComment,
//   faBookmark,
//   faSmile,
// } from '@fortawesome/free-regular-svg-icons';

class MainYeonju extends React.Component {
  render() {
    return (
      <div className="MainYeonju">
        <Nav />
        <main>
          <div className="feeds">
            <Stories />
            <Upload />
          </div>
          <Aside />
        </main>
      </div>
    );
  }
}

export default MainYeonju;
