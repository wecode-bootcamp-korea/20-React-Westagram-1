import React from 'react';
import './Comment.scss';
import '../../../../../Styles/Yeonju/reset.scss';
import '../../../../../Styles/Yeonju/common.scss';

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
