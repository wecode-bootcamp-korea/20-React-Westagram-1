import React from 'react';
import './Aside.scss';
import '../../../../../Styles/Yeonju/reset.scss';
import '../../../../../Styles/Yeonju/common.scss';

class Aside extends React.Component {
  render() {
    return (
      <div className="Aside">
        <aside className="main_right">
          <header className="right_side_top">
            <img
              className="right_side_myprofile"
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/35986726_903848573151322_399536158729568256_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=oGlfWXPE-bcAX9atN7M&edm=ABfd0MgAAAAA&ccb=7-4&oh=f611f5be4a0ab8559d5e52a25ec6441e&oe=60A9E126&_nc_sid=7bff83"
              alt="나의 프로필 사진"
            />
            <h1 className="right_side_myid"> yyeon_jju</h1>
            <button className="right_side_mybutton">
              <a href="">전환</a>
            </button>
          </header>
          <article className="right_side_article">
            <span>회원님을 위한 추천</span>
            <button>
              <a href="">모두 보기</a>
            </button>
          </article>
          <section>
            <ul>
              <li className="right_side_recommend">
                <img
                  src="http://file3.instiz.net/data/cached_img/upload/2020/12/13/12/25b0643c8fe29ff2248fcf03c1b44106.jpg"
                  alt="태연 프로필 사진"
                />
                <div className="recommend_id">taeyeon_ss</div>
                <button>
                  <a href="">팔로우</a>
                </button>
              </li>
              <li className="right_side_recommend">
                <img
                  src="https://dispatch.cdnser.be/wp-content/uploads/2018/03/2da3a9715f273c35f60a038061679457.png"
                  alt="아이유 프로필 사진"
                />
                <div className="recommend_id">dlwlrma</div>
                <button>
                  <a href="">팔로우</a>
                </button>
              </li>
              <li className="right_side_recommend">
                <img
                  src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0rfwn%2Fbtq2niMNw5P%2F3G3gG7dt8YUYgEV6xxf4f0%2Fimg.png"
                  alt="이해리 프로필 사진"
                />
                <div className="recommend_id">dlgofl85</div>
                <button>
                  <a href="">팔로우</a>
                </button>
              </li>
              <li className="right_side_recommend">
                <img
                  src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FotT26%2Fbtq2wLTL1P0%2Fn8fzhXS3TbSHYncSk29tv1%2Fimg.png"
                  alt="강민경 프로필 사진"
                />
                <div className="recommend_id">iammingki</div>
                <button>
                  <a href="">팔로우</a>
                </button>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    );
  }
}

export default Aside;
