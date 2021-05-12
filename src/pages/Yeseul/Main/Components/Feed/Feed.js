import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import User from '../User/User';
import Comment from '../Comment/Comment';
import IconButton from '../Button/IconButton';
import { API } from '../../../../../config';
import './Feed.scss';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputComment: '',
      commentId: 0,
      comments: [],
    };
  }

  componentDidMount() {
    const { feedId } = this.props;
    fetch(API.COMMENT)
      .then(comments => comments.json())
      .then(comments => {
        this.setState({
          commentId: comments.length + 1,
          comments: comments.filter(comment => comment.feedId === feedId),
        });
      });
  }

  handleInput = e => {
    this.setState({ inputComment: e.target.value });
  };

  addComment = e => {
    const { inputComment, commentId, comments } = this.state;

    e.preventDefault();
    this.setState({
      inputComment: '',
      commentId: commentId + 1,
      comments: [
        ...comments,
        {
          id: commentId.toString(),
          writer: this.props.userName,
          content: inputComment,
          tagId: '',
        },
      ],
    });
  };

  deleteComment = clickedId => {
    const { comments } = this.state;
    this.setState({
      comments: comments.filter(comment => comment.id !== clickedId),
    });
  };

  render() {
    const { inputComment, comments } = this.state;
    const { writer, contents } = this.props;

    return (
      <article className="feed give-border">
        <header className="feed__header">
          <User size="small" user={writer}>
            <IconButton
              className="feed__header__more-icon align-right"
              info={{ name: '더보기', fileName: 'more.svg' }}
            />
          </User>
        </header>
        <div className="feed__image">
          <img
            alt={`by ${writer.name} on ${contents.date}`}
            src={contents.postedImage}
          />
        </div>
        <div className="feed__btns">
          <button type="button">
            <img
              alt="좋아요"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
          </button>
          <IconButton info={{ name: '댓글', fileName: 'comment.svg' }} />
          <IconButton info={{ name: '공유하기', fileName: 'send.svg' }} />
          <IconButton
            className="align-right"
            info={{ name: '북마크', fileName: 'bookmark.svg' }}
          />
        </div>
        <p className="feed__likes-number">
          <Link to="/main-yeseul">{`좋아요 ${contents.likesNum}개`}</Link>
        </p>
        <div className="feed__description">
          <p>
            <span className="user-name">{writer.name}</span>
            <span>{contents.description}</span>
          </p>
        </div>
        <div className="feed__comments">
          {comments.map(comment => (
            <Comment
              key={comment.id}
              info={comment}
              handleClick={this.deleteComment}
            />
          ))}
        </div>
        <form
          className="feed__form align-item-center space-between"
          name="commentForm"
        >
          <IconButton info={{ name: '이모티콘', fileName: 'emoticon.svg' }} />
          <input
            type="text"
            placeholder="댓글 달기..."
            value={inputComment}
            className="feed__input-comment"
            name="inputComment"
            onChange={this.handleInput}
          />
          <input
            type="submit"
            className="feed__submit-comment"
            name="submitComment"
            value="게시"
            disabled={!(inputComment.length > 0)}
            onClick={this.addComment}
          />
        </form>
      </article>
    );
  }
}

export default Feed;
