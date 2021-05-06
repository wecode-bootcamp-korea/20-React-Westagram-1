import React, { useState } from 'react';
import CommentBar from '../CommentBar/CommentBar';
import UnderBar from '../UnderBar/UnderBar';
import Comment from '../Comment/Comment';
import './Article.scss';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Doeun/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data[this.props.index],
        });
      });
  }

  addComment = () => {
    let userId = document.location.search;

    userId = userId.slice(4, userId.indexOf('&'));
    userId = userId ? userId : 'unknown';
    this.setState({
      commentList: this.state.commentList.concat({
        id: userId,
        comment: this.state.commentValue,
      }),
    });
  };

  setInput = comment => {
    this.setState({ commentValue: comment });
  };

  setComment = comment => {
    this.setState({ commentList: comment });
  };

  render() {
    const { commentList, commentValue } = this.state;
    const { profileImg, id, feedImg, likes, saySomething, hour } = this.props;
    return (
      <article>
        <div className="header">
          <div className="profile">
            <img alt="my profile image" src={profileImg} />
          </div>
          <div className="id">
            <p>{id}</p>
          </div>
          <div className="dots">
            <img alt="ellipsis" src="images/Doeun/dot.png" />
          </div>
        </div>
        <img alt="article image" src={feedImg} />
        <UnderBar likes={likes} />
        <div className="contents">
          <div className="blahblah">
            <p className="id">{id} </p>
            <p>{saySomething}</p>
          </div>
          <p className="gray ago">{hour}시간 전</p>
          {commentList.map(c => (
            <Comment
              key={c.id + c.comment}
              id={c.id}
              comment={c.comment}
              isliked={c.isliked}
              commentList={commentList}
              setComment={this.setComment}
            />
          ))}
        </div>
        <CommentBar
          commentValue={commentValue}
          setInput={this.setInput}
          addComment={this.addComment}
        />
      </article>
    );
  }
}

export default Article;
