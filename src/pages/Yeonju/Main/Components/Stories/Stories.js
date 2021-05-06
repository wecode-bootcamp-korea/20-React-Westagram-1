import React from 'react';

import './Stories.scss';

class Stories extends React.Component {
  constructor() {
    super();
    this.STORY_DATA = [
      {
        img: 'yeonju.jpg',
        alt: '나',
      },
      {
        img: 'taeyeon.jpg',
        alt: '태연',
      },
      {
        img: 'IU.png',
        alt: '아이유',
      },
      {
        img: 'haery.png',
        alt: '해리',
      },
      {
        img: 'minkyung.png',
        alt: '민경',
      },
    ];
  }
  render() {
    return (
      <div className="Stories">
        <div className="feeds_story">
          <ul className="feeds_story_list">
            {this.STORY_DATA.map((el, index) => {
              return (
                <div className="story_gradient_wrap" key={index}>
                  <li>
                    <img
                      src={`http://localhost:3000/images/Yeonju/${el.img}`}
                      alt={`${el.alt} 프로필 사진`}
                    />
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Stories;
