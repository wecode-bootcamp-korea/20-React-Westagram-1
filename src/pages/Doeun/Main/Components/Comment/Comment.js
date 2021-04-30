import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="blahblah">
        <p className="id">{this.props.c.id} </p>
        <p>{this.props.c.comment}</p>
        <img
          alt="comment ellipsis"
          src="images/Doeun/dot.png"
          id="smalldot"
          key={this.props.index}
          onClick={() => {
            if (window.confirm('삭제하시겠습니까?')) {
              let newList = [...this.props.commentList];
              newList.splice(this.props.index, 1);
              this.props.setComment(newList);
            }
          }}
        />
        <img
          alt="like comment"
          src="images/Doeun/heart.png"
          class="likeComment"
        />
        <img
          alt="liked comment"
          src="img/redheart.png"
          class="likeComment liked hide"
        />
      </div>
    );
  }
}

export default Comment;
