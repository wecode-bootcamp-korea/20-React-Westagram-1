import React from 'react';
import './Stories.scss';
import '../../../../../Styles/Yeonju/reset.scss';
import '../../../../../Styles/Yeonju/common.scss';

class Stories extends React.Component {
  render() {
    return (
      <div classNme="Stories">
        <div className="feeds_story">
          <ul className="feeds_story_list">
            <li>
              <div className="gradient-wrap">
                <img
                  src="http://localhost:3000/images/Yeonju/yeonju.jpg"
                  alt="나의 프로필 사진"
                />
              </div>
            </li>
            <div className="gradient-wrap">
              <li>
                <img
                  src="http://localhost:3000/images/Yeonju/taeyeon.jpg"
                  alt="태연 프로필 사진"
                />
              </li>
            </div>
            <div className="gradient-wrap">
              <li>
                <img
                  src="http://localhost:3000/images/Yeonju/IU.png"
                  alt="아이유 프로필 사진"
                />
              </li>
            </div>
            <div className="gradient-wrap">
              <li>
                <img
                  src="http://localhost:3000/images/Yeonju/haery.png"
                  alt="이해리 프로필 사진"
                />
              </li>
            </div>
            <div className="gradient-wrap">
              <li>
                <img
                  src="http://localhost:3000/images/Yeonju/minkyung.png"
                  alt="강민경 프로필 사진"
                />
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Stories;
