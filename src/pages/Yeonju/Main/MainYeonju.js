import React from 'react';

import Nav from './Components/Nav/Nav';
import Upload from './Components/Upload/Upload';
import Stories from './Components/Stories/Stories';
import Aside from './Components/Aside/Aside';

import './MainYeonju.scss';

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
