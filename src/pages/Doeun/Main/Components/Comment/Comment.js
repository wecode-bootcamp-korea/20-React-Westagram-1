import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = { like: false };
  }

  render() {
    const { like } = this.state;
    const { id, comment, index, setComment, commentList } = this.props;

    return (
      <div className="blahblah">
        <p className="id">{id} </p>
        <p>{comment}</p>
        <img
          alt="comment ellipsis"
          src="images/Doeun/dot.png"
          id="smalldot"
          key={index}
          onClick={() => {
            if (window.confirm('삭제하시겠습니까?')) {
              let newList = [...commentList];
              newList.splice(index, 1);
              setComment(newList);
            }
          }}
        />
        <img
          alt="like comment"
          src="images/Doeun/heart.png"
          className="likeComment"
          onClick={() => {
            this.setState({ like: true });
          }}
        />
        <img
          alt="liked comment"
          src="images/Doeun/redheart.png"
          className={`likeComment liked ${like ? '' : 'hide'}`}
          onClick={() => {
            this.setState({ like: false });
          }}
        />
      </div>
    );
  }
}

export default Comment;
