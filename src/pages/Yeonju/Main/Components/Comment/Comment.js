import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    const { userName, comment } = this.props;
    return (
      <form>
        <li>
          {userName}
          {comment}
        </li>
      </form>
    );
  }
}
export default Comment;
