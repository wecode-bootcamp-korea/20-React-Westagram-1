/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../../Styles/Yeseul/base.scss';
import Nav from './Components/Nav/Nav';
import Feed from './Components/Feed/Feed';
import Story from './Components/Story/Story';
import Recommendation from './Components/Recommendation/Recommendation';
import './Main.scss';

class MainYeseul extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main role="main">
          <section className="feeds">
            <Feed />
          </section>
          <div className="main-right">
            <section className="user-profile align-item-center">
              <a href="#" className="profile-image--big">
                <img
                  alt="yesl.k님의 프로필 사진"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/159201707_1370690073293044_5504838793282701571_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=X3ZreJYCwS8AX8sC9GN&edm=AIQHJ4wBAAAA&ccb=7-4&oh=e71b1eb1001374c111da7a1a5feee831&oe=60A4F7CF&_nc_sid=7b02f1"
                />
              </a>
              <a href="#" className="user-name js-user-name">
                yesl.k
              </a>
              <button className="align-right" type="button">
                전환
              </button>
            </section>
            <Story />
            <Recommendation />
          </div>
        </main>
      </>
    );
  }
}

export default MainYeseul;
