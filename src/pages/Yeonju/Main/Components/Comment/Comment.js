import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    //목데이터 활용 댓글
    // const { userName, comment } = this.props;
    //onSubmit 활용 댓글
    const { id, comment, index, commentList, deleteComment } = this.props;

    return (
      <form className="Comment">
        {/* //목데이터 활용 댓글 */}
        {/* <li>
          <span className="userName">{userName}</span>
          <span className="comment">{comment}</span>
        </li> */}
        {/* onsubmit 활용 댓글 */}
        <li>
          <span className="userName">{id}</span>
          <span className="comment">{comment}</span>
          <button
            className="commentDeleteBtn"
            onClick={e => {
              if (window.confirm('삭제하시겠습니까?')) {
                const newList = [...commentList];
                newList.splice(index, 1);
                deleteComment(newList);
              } else {
                e.preventDefault();
              }
            }}
          >
            삭제
          </button>
        </li>
      </form>
    );
  }
}
export default Comment;
