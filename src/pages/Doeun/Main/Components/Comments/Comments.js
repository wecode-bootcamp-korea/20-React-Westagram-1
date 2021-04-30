import React from 'react';
import './Comments.scss';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = { comment: '' };
  }

  render() {
    return (
      <div className="comments">
        <div>
          <svg
            aria-label="이모티콘"
            className="_8-yf5 "
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
            <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
          </svg>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.addComment();
            this.setState({ comment: '' });
          }}
        >
          <input
            type="text"
            placeholder="댓글 달기..."
            onInput={e => {
              this.setState({ comment: e.target.value });
              this.props.setInput(e.target.value);
            }}
            value={this.state.comment}
          />
          <button
            className={this.state.comment && 'active'}
            disabled={this.state.comment ? false : true}
          >
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default Comments;
