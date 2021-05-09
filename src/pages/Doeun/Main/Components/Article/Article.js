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
    fetch('/data/Doeun/commentData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data[this.props.index],
        });
      });
  }

  addComment = () => {
    this.setState({
      commentList: this.state.commentList.concat({
        id: 'unknown',
        comment: this.state.commentValue,
      }),
    });
  };

  setCommentValue = comment => {
    this.setState({ commentValue: comment });
  };

  deleteComment = comment => {
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
          <div className="Comment">
            <p className="id">{id} </p>
            <p>{saySomething}</p>
          </div>
          <p className="gray ago">{hour}시간 전</p>
          {commentList.map((c, index) => (
            <Comment
              key={c.id + c.comment}
              index={index}
              id={c.id}
              comment={c.comment}
              isliked={c.isliked}
              commentList={commentList}
              deleteComment={this.deleteComment}
            />
          ))}
        </div>
        <CommentBar
          commentValue={commentValue}
          setCommentValue={this.setCommentValue}
          addComment={this.addComment}
        />
      </article>
    );
  }
}

export default Article;
