import React from 'react';
import Comments from '../Comments/Comments';
import UnderBar from '../UnderBar/UnderBar';
import './Article.scss';

function Article() {
  return (
    <article>
      <div className="header">
        <div className="profile">
          <img alt="my profile image" src="images/Doeun/profile.jpg" />
        </div>
        <div className="id">
          <p>do.silv</p>
        </div>
        <div className="dots">
          <img alt="ellipsis" src="images/Doeun/dot.png" />
        </div>
      </div>
      <img alt="article image" src="images/Doeun/feedimg1.jpg" />
      <UnderBar />
      <div className="contents">
        <div className="blahblah">
          <p className="id">do.silv </p>
          <p>빵 조아 🍰🥯🥞🍩🍪🍞🥐🥖🥨</p>
        </div>
        <p className="gray ago">1시간 전</p>
        <div className="blahblah">
          <p className="id">wecode_bootcamp </p>
          <p>맛있겠당</p>
        </div>
      </div>
      <Comments />
    </article>
  );
}

export default Article;
