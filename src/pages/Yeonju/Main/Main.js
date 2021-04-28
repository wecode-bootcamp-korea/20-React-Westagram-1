import React from 'react';
import './Main.scss';
import '../../../Styles/Yeonju/reset.scss';
import '../../../Styles/Yeonju/common.scss';

import Nav from '../../components/Nav';
import Upload from '../../components/Upload';
import Stories from '../../components/Stories';
import Aside from '../../components/Aside';

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

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
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

export default Main;
