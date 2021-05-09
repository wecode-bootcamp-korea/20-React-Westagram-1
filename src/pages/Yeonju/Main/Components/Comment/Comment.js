import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    const { userName, comment } = this.props;
    return (
      <form className="Comment">
        <li>
          <span className="userName">{userName}</span>
          <span className="comment">{comment}</span>
        </li>
      </form>
    );
  }
}
export default Comment;
