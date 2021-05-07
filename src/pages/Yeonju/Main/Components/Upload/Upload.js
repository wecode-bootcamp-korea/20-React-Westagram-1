import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Comment from '../Comment/Comment';

import './Upload.scss';

import {
  faPaperPlane,
  faHeart,
  faComment,
  faBookmark,
  faSmile,
} from '@fortawesome/free-regular-svg-icons';

class Upload extends React.Component {
  constructor() {
    super();
    this.state = {
      commentValue: '',
      commentList: [],
    };
  }

  componentDidMount() {
    fetch('/data/Yeonju/commentData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  handleCommentInput = e => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  addComment = e => {
    e.preventDefault();
    const { commentList, commentValue } = this.state;
    this.setState({
      // commentList: commentList.concat([commentValue]),
      commentList: [...commentList, commentValue],
      commentValue: '',
    });
  };

  render() {
    return (
      <div className="Upload">
        <article className="feeds_upload">
          <div className="feeds_upload_content">
            <div className="feeds_upload_idname">
              <img
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/35986726_903848573151322_399536158729568256_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=oGlfWXPE-bcAX9atN7M&edm=ABfd0MgAAAAA&ccb=7-4&oh=f611f5be4a0ab8559d5e52a25ec6441e&oe=60A9E126&_nc_sid=7bff83"
                alt="yyeon_jju_profile_image"
              />
              <div>
                <span className="feeds_uploader">yyeon_jju</span>
              </div>
            </div>
            <div className="feeds_upload_image">
              <img
                src="https://www.medigatenews.com/file/news/214795"
                alt="벚꽃"
              />
            </div>
            <div className="feeds_upload_icons">
              <div>
                <button>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="far fa-heart buttonicon icon"
                  />
                </button>
                <button>
                  <FontAwesomeIcon
                    icon={faComment}
                    className="far fa-comment buttonicon icon"
                  />
                </button>
                <button>
                  {' '}
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="far fa-paper-plane buttonicon icon"
                  />
                </button>
                <button>
                  {' '}
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="far fa-bookmark buttonicon icon"
                  />
                </button>
              </div>
            </div>
            <div className="feeds_upload_likes">
              <p className="count_likes">좋아요 3000개</p>
            </div>
            <form className="feeds_upload_comments">
              <li>
                <span className="comment_writer">yyeon_jju</span>
                <span className="comment_content">너무 예뻐요~~</span>
              </li>
              {this.state.commentList.map((commentElement, index) => {
                return (
                  <Comment
                    key={index}
                    userName={commentElement.userName}
                    comment={commentElement.content}
                  />
                );
              })}
            </form>
            <div className="feeds_upload_time">
              <span className="time_pass"> 2시간 전</span>
            </div>
            <form className="feeds_upload_wright" onSubmit={this.addComment}>
              <FontAwesomeIcon icon={faSmile} className="far fa-smile icon" />
              <input
                placeholder="댓글 달기..."
                onChange={this.handleCommentInput}
                value={this.state.commentValue}
              />
              <button type="submit">게시</button>
            </form>
          </div>
        </article>
      </div>
    );
  }
}

export default Upload;
