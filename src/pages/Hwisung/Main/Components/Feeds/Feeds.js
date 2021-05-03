import React from 'react';
import Reply from '../Reply/Reply';
import './Feeds.scss';

class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      NewReply: '',
      ReplyList: [{ Content: '' }],
      product: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/Hwisung/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ product: res });
      });
  }

  addReply = () => {
    let ReplyArr = this.state.ReplyList;
    if (this.state.NewReply === '') {
      alert('댓글을 입력해주세요');
    } else {
      ReplyArr = ReplyArr.concat({ Content: this.state.NewReply });
      this.setState({ NewReply: '', ReplyList: ReplyArr });
    }
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
    const { commentValue } = this.state;
    console.log(commentValue);
    return (
      <>
        <div class="Feeds">
          <article class="Feed">
            <div class="FeedAccount">
              <div id="FeedAccount">
                <img src="/images/Hwisung/netflix.png" alt="넷플릭스" />
              </div>
            </div>
            {/* <div class="feed_img"> */}
            <img
              src="/images/Hwisung/feedimg.png"
              class="feed_img"
              alt="피드내용"
            />
            {/* </div> */}
            <div class="Status">
              <img
                class="status_like"
                src="/images/Hwisung/like.png"
                alt="좋아요 상태"
              />
              <img src="/images/Hwisung/reply.png" alt="답글" />
              <img src="/images/Hwisung/dm.png" alt="메세지" />
              <img src="/images/Hwisung/share.png" alt="공유하기" />
            </div>
            <div class="WhoLike">위코드님 외 10명이조아함</div>
            <div class="ReplyList">
              <ul class="ReplyListAll">
                <Reply ReplyList={this.state.ReplyList} />
              </ul>
            </div>
            <div class="ReplyWhen">5분전</div>
            <input
              type="text"
              class="reply"
              onChange={this.writeReply}
              onKeyPress={this.addReplyEnter}
              placeholder="댓글달기"
            />
            <button class="Post" onClick={this.addReply}>
              게시
            </button>
            <button class="Like">조아여</button>
            <button class="Del">삭제</button>
          </article>
        </div>
      </>
    );
  }
}
export default Feeds;
