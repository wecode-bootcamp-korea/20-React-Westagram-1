/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }

  handleClick = e => {
    const { handleClick } = this.props;
    handleClick(e.target.id);
  };

  likeComment = () => {
    this.setState({ isLiked: !this.state.isLiked });
  };

  render() {
    const { isLiked } = this.state;
    const { info } = this.props;

    return (
      <p className="feed__comment align-item-center">
        <span className="user-name">{info.writer}</span>
        <a href="#">{info.tagId ? `@${info.tagId}` : ''}</a>
        {info.content}
        <button
          type="button"
          id={info.id}
          className="delete-btn"
          onClick={this.handleClick}
        >
          x
        </button>
        <button
          className={
            isLiked ? 'like-btn align-right clicked' : 'like-btn align-right '
          }
          onClick={this.likeComment}
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-50 -45 580 580"
            xmlSpace="preserve"
          >
            <path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514C512,93.417,453.532,30,376,30z" />
          </svg>
        </button>
      </p>
    );
  }
}

export default Comment;
