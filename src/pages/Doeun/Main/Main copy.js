import React, { useState } from 'react';
import Article from './Components/Article/Article';
import SideBar from './Components/SideBar/SideBar';
import Nav from './Components/Nav/Nav';
import './Main.scss';

function Main({ history }) {
  function goToLogin() {
    history.push('/');
  }

  const USERS = [
    {
      id: 'skuukzky',
      profileImg: 'images/Doeun/skuukzky.jpg',
      description: '숮이 💄💅👡👠🎀👙🌂👗🌂🎀💋💌',
    },
    {
      id: '_imyour_joy',
      profileImg: 'images/Doeun/_imyour_joy.jpg',
      description: 'Joy 🌺',
    },
    {
      id: 'cafeknotted',
      profileImg: 'images/Doeun/cafeknotted.jpg',
      description: '노티드 Cafe Knotted',
    },
    {
      id: 'jennierubyjane',
      profileImg: 'images/Doeun/jennierubyjane.jpg',
      description: 'J',
    },
    {
      id: 'bts.bighotofficial',
      profileImg: 'images/Doeun/bts.bighotofficial.jpg',
      description: 'BTS | BANGTAN | 방탄소년단',
    },
    {
      id: 'skawngur',
      profileImg: 'images/Doeun/skawngur.jpg',
      description: '남주혁',
    },
    {
      id: '_victoria_bakery',
      profileImg: 'images/Doeun/_victoria_bakery.jpg',
      description: 'Victoria Bakery',
    },
    {
      id: 'yeojin9oo',
      profileImg: 'images/Doeun/yeojin9oo.jpg',
      description: '여진구 Yeo Jin Goo',
    },
    {
      id: 'akmu_suhyun',
      profileImg: 'images/Doeun/akmu_suhyun.jpg',
      description: '이수현 1999.05.04',
    },
    {
      id: 'nct_dream',
      profileImg: 'images/Doeun/nct_dream.jpg',
      description: 'NCT DREAM OFFICIAL',
    },
    {
      id: 'wm_ohmygirl',
      profileImg: 'images/Doeun/wm_ohmygirl.jpg',
      description: 'OHMYGIRL (오마이걸) WM ENT 오마이걸 공식 인스타그램',
    },
    {
      id: 'twicetagram',
      profileImg: 'images/Doeun/twicetagram.jpg',
      description: 'TWICE',
    },
    {
      id: 'youngji_02',
      profileImg: 'images/Doeun/youngji_02.jpg',
      description: '이영지',
    },
    {
      id: 'saddlerhaus_bakery',
      profileImg: 'images/Doeun/saddlerhaus_bakery.jpg',
      description: 'french waffle',
    },
    {
      id: 'onyourm__ark',
      profileImg: 'images/Doeun/onyourm__ark.jpg',
      description: 'Mark 🐯🌱',
    },
    {
      id: 'songkang_b',
      profileImg: 'images/Doeun/songkang_b.jpg',
      description: '송강',
    },
    {
      id: 'roses_are_rosie',
      profileImg: 'images/Doeun/roses_are_rosie.jpg',
      description: 'ROSÉ',
    },
    {
      id: 'dlwlrma',
      profileImg: 'images/Doeun/dlwlrma.jpg',
      description: '이지금 IU',
    },
  ];

  let [storyRight, resetStoryRight] = useState(0);

  function goRight() {
    if (storyRight < 765) resetStoryRight(storyRight + 265);
  }

  function goLeft() {
    if (storyRight > 0) resetStoryRight(storyRight - 265);
  }

  return (
    <div className="mainSass">
      <Nav USERS={USERS} />
      <div className="mainContainer">
        <main>
          <div className="storyBox">
            <i className="fas fa-chevron-circle-left" onClick={goLeft}></i>
            <i className="fas fa-chevron-circle-right" onClick={goRight}></i>
            <div className="storySpan" style={{ right: storyRight }}>
              {[...USERS].reverse().map(users => (
                <div className="story">
                  <div>
                    <img src="images/Doeun/storyring.png" id="storyring" />
                    <img
                      alt="user's profile image"
                      src={'images/Doeun/' + users.id + '.jpg'}
                      id="storyprofile"
                    />
                  </div>
                  <p>
                    {users.id.length < 10
                      ? users.id
                      : users.id.slice(0, 9) + '...'}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Article />
        </main>
        <SideBar USERS={USERS} />
      </div>
      <script src="feed.js"></script>
    </div>
  );
}

export default MainCopy;
