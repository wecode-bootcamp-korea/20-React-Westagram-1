import React from 'react';
import Reply from '../Reply/Reply';
import './Feeds.scss';

class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      NewReply: '',
      ReplyList: [{ comment: '' }],
    };
  }
  addReply = e => {
    const { ReplyList, NewReply } = this.state;
    this.setState({ ReplyList: ReplyList.concat({ comment: NewReply }) });
    this.setState({ NewReply: '' });
  };

  addReplyEnter = event => {
    if (event.key === 'Enter') {
      this.addReply();
      event.target.value = '';
    }
  };

  writeReply = e => {
    this.setState({
      NewReply: e.target.value,
    });
  };

  render() {
    const { ReplyList } = this.state;
    return (
      <>
        <div className="Feeds">
          <article className="Feed">
            <div className="FeedAccount">
              <div id="FeedAccount">
                <img src="/images/Hwisung/netflix.png" alt="넷플릭스" />
              </div>
            </div>
            {/* <div className="feed_img"> */}
            <img
              src="/images/Hwisung/feedimg.png"
              className="feed_img"
              alt="피드내용"
            />
            {/* </div> */}
            <div className="Status">
              <img
                className="status_like"
                src="/images/Hwisung/like.png"
                alt="좋아요 상태"
              />
              <img src="/images/Hwisung/reply.png" alt="답글" />
              <img src="/images/Hwisung/dm.png" alt="메세지" />
              <img src="/images/Hwisung/share.png" alt="공유하기" />
            </div>
            <div className="WhoLike">위코드님 외 10명이조아함</div>
            <div className="ReplyList">
              <ul className="ReplyListAll">
                <Reply ReplyList={ReplyList} />;
              </ul>
            </div>
            <div className="ReplyWhen">5분전</div>
            <input
              type="text"
              className="reply"
              onChange={this.writeReply}
              onKeyPress={this.addReplyEnter}
              placeholder="댓글달기"
              value={this.state.NewReply}
            />
            <button className="Post" onClick={this.addReply}>
              게시
            </button>
            <button className="Like">조아여</button>
            <button className="Del">삭제</button>
          </article>
        </div>
      </>
    );
  }
}
export default Feeds;
