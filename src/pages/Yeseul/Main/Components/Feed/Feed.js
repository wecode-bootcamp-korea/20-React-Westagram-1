/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import IconButton from '../Button/IconButton';
import './Feed.scss';
import Comment from '../Comment/Comment';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          id: 1,
          userName: 'objental',
          content: '사이트 주방 또는 데코 카테고리에서 상품 확인 가능하세요😊',
          tagId: '5write',
        },
        {
          id: 2,
          userName: 'jerrysmarket.official',
          content: '와 너무 예뻐요',
          tagId: '',
        },
      ],
    };
  }

  render() {
    const { comments } = this.state;
    const commentItem = comments.map(comment => (
      <Comment
        key={comment.id}
        userName={comment.userName}
        content={comment.content}
        tagId={comment.tagId}
      />
    ));
    return (
      <article className="feed give-border">
        <header className="feed__header align-item-center">
          <a href="#" className="profile-image--small">
            <img
              alt="오브젠탈 프로필 사진"
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/122493551_276052993647146_2009192636666657519_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=zK_EvJTWqwAAX9zB93x&edm=AEF8tYYBAAAA&ccb=7-4&oh=00a7fd638bc158820530230c64543d99&oe=60A6166E&_nc_sid=a9513d"
            />
          </a>
          <a href="#" className="user-name">
            objental
          </a>
          <IconButton
            className="feed__header__more-icon align-right"
            info={{ name: '더보기', fileName: 'more.svg' }}
          />
        </header>
        <div className="feed__image">
          <img
            alt="photo by 오브젠탈 on April 19, 2021."
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/175327568_462795788160917_5319447458414571704_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=XX9lh8ufxbMAX9Ud_M6&edm=AP_V10EBAAAA&ccb=7-4&oh=841cbea35c0fa15f1b7109264004e91d&oe=60A41F19&_nc_sid=4f375e"
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
          <a>좋아요 503개</a>
        </p>
        <div className="feed__description">
          <p>
            <span className="user-name">objental</span>
            <span>
              미니멀 아크릴 사각 트레이 4가지 컬러로 준비하였어요💙
              <br />
              <br />
              | SIZE |<br />
              W400mm * D280mm * H45mm
            </span>
          </p>
        </div>
        <div className="feed__comments js-comments">{commentItem}</div>
        <form
          className="feed__form align-item-center space-between"
          name="commentForm"
        >
          <IconButton info={{ name: '이모티콘', fileName: 'emoticon.svg' }} />
          <input
            type="text"
            placeholder="댓글 달기..."
            className="feed__input-comment"
            name="inputComment"
          />
          <input
            type="submit"
            className="feed__submit-comment"
            name="submitComment"
            value="게시"
            disabled
          />
        </form>
      </article>
    );
  }
}

export default Feed;
