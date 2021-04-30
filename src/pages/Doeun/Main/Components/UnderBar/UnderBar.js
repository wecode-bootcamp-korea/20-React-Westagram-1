import React from 'react';
import './UnderBar.scss';

class UnderBar extends React.Component {
  constructor() {
    super();
    this.state = { like: true, redLike: false };
  }

  likeit = () => {
    this.setState({ like: false });
    setTimeout(() => {
      this.setState({ redLike: true });
    }, 200);
  };

  cancel = () => {
    this.setState({ like: true });
    setTimeout(() => {
      this.setState({ redLike: false });
    }, 200);
  };
  render() {
    return (
      <div className="underbar">
        <div className="tab">
          <img
            alt="like"
            src="images/Doeun/heart.png"
            className={!this.state.like && 'pop'}
            onClick={this.likeit}
          />
          <img
            alt="liked"
            src="images/Doeun/redheart.png"
            id="red"
            style={{ display: this.state.redLike && 'inline' }}
            className={this.state.like && 'pop'}
            onClick={this.cancel}
          />
          <img alt="comment" src="images/Doeun/comment.jpg" />
          <img alt="direct message" src="images/Doeun/dm.png" />
        </div>
        <div className="bookmark">
          <img alt="bookmark" src="images/Doeun/bookmark.webp" />
        </div>
        <p className="bold" id="likes">
          {' '}
          좋아요 {this.state.redLike ? 20 : 19}개
        </p>
      </div>
    );
  }
}

export default UnderBar;
