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
          commentList: data,
        });
      });
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
    return (
      <article>
        <div className="header">
          <div className="profile">
            <img alt="my profile image" src={this.props.profileImg} />
          </div>
          <div className="id">
            <p>{this.props.id}</p>
          </div>
          <div className="dots">
            <img alt="ellipsis" src="images/Doeun/dot.png" />
          </div>
        </div>
        <img alt="article image" src={this.props.feedImg} />
        <UnderBar />
        <div className="contents">
          <div className="blahblah">
            <p className="id">do.silv </p>
            <p>{this.props.saySomething}</p>
          </div>
          <p className="gray ago">{this.props.hour}시간 전</p>
          {this.state.commentList[].map((c, index) => (
            <Comment
              id={c.id}
              comment={c.comment}
              key={index}
              commentList={this.state.commentList}
              setComment={this.setComment}
            />
          ))}
        </div>
        <CommentBar
          commentValue={this.state.commentValue}
          setInput={this.setInput}
          addComment={this.addComment}
        />
      </article>
    );
  }
}

export default Article;
