import React, { useState } from 'react';
import Comments from '../Comments/Comments';
import UnderBar from '../UnderBar/UnderBar';
import './Article.scss';

function Article() {
  let [commentList, setCommentList] = useState([
    { id: 'wecode_bootcamp', comment: '맛있겠당', key: 0 },
  ]);

  let [input, setInput] = useState('');

  function addComment() {
    let userId = document.location.search.slice(
      4,
      document.location.search.indexOf('&')
    );
    userId = userId ? userId : 'unknown';
    setCommentList(
      commentList.concat({
        id: userId,
        comment: input,
      })
    );
  }

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
        {commentList.map((c, index) => (
          <div className="blahblah">
            <p className="id">{c.id} </p>
            <p>{c.comment}</p>
            <img
              alt="comment ellipsis"
              src="images/Doeun/dot.png"
              id="smalldot"
              key={index}
              onClick={() => {
                if (window.confirm('삭제하시겠습니까?')) {
                  setCommentList(
                    commentList
                      .slice(0, index)
                      .concat(commentList.slice(index + 1))
                  );
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
        ))}
      </div>
      <Comments input={input} setInput={setInput} addComment={addComment} />
    </article>
  );
}

export default Article;
