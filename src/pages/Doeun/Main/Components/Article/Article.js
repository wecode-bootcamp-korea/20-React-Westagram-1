import React, { useState } from 'react';
import CommentBar from '../CommentBar/CommentBar';
import UnderBar from '../UnderBar/UnderBar';
import Comment from '../Comment/Comment';
import './Article.scss';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [{ id: 'wecode_bootcamp', comment: '맛있겠당', key: 0 }],
      input: '',
    };

    // let [input, setInput] = useState('');
  }

  addComment = () => {
    let userId = document.location.search.slice(
      4,
      document.location.search.indexOf('&')
    );
    userId = userId ? userId : 'unknown';
    this.setState({
      commentList: this.state.commentList.concat({
        id: userId,
        comment: this.state.input,
      }),
    });
  };

  setInput = comment => {
    this.setState({ input: comment });
  };

  setComment = comment => {
    this.setState({ commentList: comment });
  };

  render() {
    return (
      <article>
        <div className="header">
          <div className="profile">
            <img alt="my profile image" src="images/Doeun/profile.jpg" />
          </div>
          <div className="id">
            <p>do.silv</p>
          </div>
          <div className="dots">
            <img alt="ellipsis" src="images/Doeun/dot.png" />
          </div>
        </div>
        <img alt="article image" src="images/Doeun/feedimg1.jpg" />
        <UnderBar />
        <div className="contents">
          <div className="blahblah">
            <p className="id">do.silv </p>
            <p>빵 조아 🍰🥯🥞🍩🍪🍞🥐🥖🥨</p>
          </div>
          <p className="gray ago">1시간 전</p>
          {this.state.commentList.map((c, index) => (
            <Comment
              c={c}
              index={index}
              commentList={this.state.commentList}
              setComment={this.setComment}
            />
          ))}
        </div>
        <CommentBar
          input={this.state.input}
          setInput={this.setInput}
          addComment={this.addComment}
        />
      </article>
    );
  }
}

export default Article;
