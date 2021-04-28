import React from 'react';
import './UnderBar.scss';

class UnderBar extends React.Component {
  render() {
    return (
      <div className="underbar">
        <div className="tab">
          <img alt="like" src="images/Doeun/heart.png" />
          <img alt="liked" src="images/Doeun/redheart.png" id="red" />
          <img alt="comment" src="images/Doeun/comment.jpg" />
          <img alt="direct message" src="images/Doeun/dm.png" />
        </div>
        <div className="bookmark">
          <img alt="bookmark" src="images/Doeun/bookmark.webp" />
        </div>
        <p className="bold" id="likes">
          {' '}
          좋아요 19개
        </p>
      </div>
    );
  }
}

export default UnderBar;
