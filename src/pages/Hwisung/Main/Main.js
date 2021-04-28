import React from 'react';
import Nav from './Components/Nav/Nav';
import Aside from './Components/Aside/Aside';
import Feeds from './Components/Feeds/Feeds';
import './Main.scss';

class MainHwisung extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main class="main">
          <Feeds />
          <Aside />
        </main>
      </>
    );
  }
}
export default MainHwisung;
