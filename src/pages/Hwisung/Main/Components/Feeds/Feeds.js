import React from 'react';
import './Feeds.scss';

class Feeds extends React.Component {
  render() {
    return (
      <>
        <div class="Feeds">
          <article class="feed">
            <div class="feed_account">
              <div id="feed_account">
                <img src="/images/netflix.png" alt="넷플릭스" />
              </div>
            </div>
            <div class="feed_img">
              <img src="/images/feedimg.png" class="feed_img" alt="피드내용" />
            </div>
            <div class="status">
              <img
                class="status_like"
                src="/images/like.png"
                alt="좋아요 상태"
              />
              <img src="/images/reply.png" alt="답글" />
              <img src="/images/dm.png" alt="메세지" />
              <img src="/images/share.png" alt="공유하기" />
            </div>
            <div class="whoLike">위코드님 외 10명이조아함</div>
            <div class="reply_list">
              <ul class="reply_list_all"></ul>
            </div>
            <div class="reply_when">5분전</div>
            <input type="text" class="reply" placeholder="댓글 달기..." />
            <button class="post">게시</button>
            <button class="iLike">조아여</button>
            <button class="del">삭제</button>
          </article>
        </div>
      </>
    );
  }
}
export default Feeds;
