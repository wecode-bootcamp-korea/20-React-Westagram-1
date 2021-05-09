import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faHeart,
  faComment,
  faBookmark,
  faSmile,
} from '@fortawesome/free-regular-svg-icons';
import Comment from '../Comment/Comment';
import './Upload.scss';

class Upload extends React.Component {
  constructor() {
    super();
    this.state = {
      commentValue: '',
      commentList: [],
    };
  }

  //목데이터 활용 댓글
  // componentDidMount() {
  //   fetch('/data/Yeonju/commentData.json')
  //     .then(res => res.json())
  //     .then(commentData => {
  //       this.setState({
  //         commentList: commentData,
  //       });
  //     });
  // }

  handleCommentInput = e => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  addComment = e => {
    e.preventDefault();
    const { commentList, commentValue } = this.state;
    this.setState({
      //목데이터 활용 댓글
      // commentList: [...commentList, commentValue],
      //onSubmit 활용 댓글
      commentList: commentList.concat({ id: 'Unknown', comment: commentValue }),
      commentValue: '',
    });
  };

  deleteComment = list => {
    this.setState({
      commentList: [...list],
    });
  };

  render() {
    const {
      authorId,
      authorProfileImageSrc,
      authorProfileImageAlt,
      uploadImageSrc,
      uploadImageAlt,
      likesNum,
      uploadTime,
    } = this.props;
    return (
      <div className="Upload">
        <article className="feeds_upload">
          <div className="feeds_upload_content">
            <div className="feeds_upload_idname">
              <img src={authorProfileImageSrc} alt={authorProfileImageAlt} />
              <div>
                <span className="feeds_uploader">{authorId}</span>
              </div>
            </div>
            <div className="feeds_upload_image">
              <img src={uploadImageSrc} alt={uploadImageAlt} />
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
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="far fa-paper-plane buttonicon icon"
                  />
                </button>
                <button>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="far fa-bookmark buttonicon icon"
                  />
                </button>
              </div>
            </div>
            <div className="feeds_upload_likes">
              <p className="count_likes">{`좋아요 ${likesNum}개`}</p>
            </div>
            <form className="feeds_upload_comments">
              <li>
                <span className="comment_writer">yyeon_jju</span>
                <span className="comment_content">너무 예뻐요~~</span>
              </li>
              {this.state.commentList.map((commentElement, index) => {
                return (
                  //목데이터 활용 댓글
                  // <Comment
                  //   key={index}
                  //   userName={commentElement.userName}
                  //   comment={commentElement.content}
                  // />
                  //onSubmit 활용 댓글
                  <Comment
                    key={commentElement.id + index}
                    id={commentElement.id}
                    comment={commentElement.comment}
                    commentList={this.state.commentList}
                    deleteComment={this.deleteComment}
                    index={index}
                  />
                );
              })}
            </form>
            <div className="feeds_upload_time">
              <span className="time_pass">{`${uploadTime}시간 전`}</span>
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
