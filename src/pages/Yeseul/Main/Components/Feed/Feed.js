/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import User from '../User/User';
import Comment from '../Comment/Comment';
import IconButton from '../Button/IconButton';
import './Feed.scss';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputComment: '',
      comments: [
        {
          id: 1,
          writer: 'objental',
          content: '사이트 주방 또는 데코 카테고리에서 상품 확인 가능하세요😊',
          tagId: '5write',
        },
        {
          id: 2,
          writer: 'jerrysmarket.official',
          content: '와 너무 예뻐요',
          tagId: '',
        },
      ],
    };
  }

  handleInput = e => {
    this.setState({ inputComment: e.target.value });
  };

  addComment = e => {
    const { inputComment, comments } = this.state;

    e.preventDefault();
    this.setState({
      inputComment: '',
      comments: [
        ...comments,
        {
          id: comments.length + 1,
          writer: this.props.userName,
          content: inputComment,
          tagId: '',
        },
      ],
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
            alt={`photo by ${writer.name} on ${contents.date}`}
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
          <a>{`좋아요 ${contents.likesNum}개`}</a>
        </p>
        <div className="feed__description">
          <p>
            <span className="user-name">{writer.name}</span>
            <span>{contents.description}</span>
          </p>
        </div>
        <div className="feed__comments js-comments">
          {comments.map(comment => (
            <Comment
              key={comment.id}
              writer={comment.writer}
              content={comment.content}
              tagId={comment.tagId}
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
