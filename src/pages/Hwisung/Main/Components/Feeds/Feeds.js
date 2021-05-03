import React from 'react';
import Reply from '../Reply/Reply';
import './Feeds.scss';

class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      NewReply: '',
      ReplyList: [{ Content: '' }],
    };
  }

  addReply = () => {
    let ReplyArr = this.state.ReplyList;
    ReplyArr = ReplyArr.concat({ Content: this.state.NewReply });
    this.setState({ NewReply: '', ReplyList: ReplyArr });
  };

  addReplyEnter = event => {
    if (event.key === 'Enter') {
      this.addReply();
      event.target.value = '';
    }
  };

  writeReply = event => {
    this.setState({ NewReply: event.target.value });
  };

  render() {
    return (
      <>
        <div class="Feeds">
          <article class="feed">
            <div class="feed_account">
              <div id="feed_account">
                <img src="/images/Hwisung/netflix.png" alt="넷플릭스" />
              </div>
            </div>
            <div class="feed_img">
              <img
                src="/images/Hwisung/feedimg.png"
                class="feed_img"
                alt="피드내용"
              />
            </div>
            <div class="status">
              <img
                class="status_like"
                src="/images/Hwisung/like.png"
                alt="좋아요 상태"
              />
              <img src="/images/Hwisung/reply.png" alt="답글" />
              <img src="/images/Hwisung/dm.png" alt="메세지" />
              <img src="/images/Hwisung/share.png" alt="공유하기" />
            </div>
            <div class="whoLike">위코드님 외 10명이조아함</div>
            <div class="reply_list">
              <ul class="reply_list_all">
                <Reply ReplyList={this.state.ReplyList} />
              </ul>
            </div>
            <div class="reply_when">5분전</div>
            <input
              type="text"
              class="reply"
              onChange={this.writeReply}
              onKeyPress={this.addReplyEnter}
              placeholder="댓글 달기..."
            />
            <button class="post" onClick={this.addReply}>
              게시
            </button>
            <button class="iLike">조아여</button>
            <button class="del">삭제</button>
          </article>
        </div>
      </>
    );
  }
}
export default Feeds;
