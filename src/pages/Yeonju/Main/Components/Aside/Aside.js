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
              src="http://localhost:3000/images/Yeonju/yeonju.jpg"
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
                  src="http://localhost:3000/images/Yeonju/taeyeon.jpg"
                  alt="태연 프로필 사진"
                />
                <div className="recommend_id">taeyeon_ss</div>
                <button>
                  <a href="">팔로우</a>
                </button>
              </li>
              <li className="right_side_recommend">
                <img
                  src="http://localhost:3000/images/Yeonju/IU.png"
                  alt="아이유 프로필 사진"
                />
                <div className="recommend_id">dlwlrma</div>
                <button>
                  <a href="">팔로우</a>
                </button>
              </li>
              <li className="right_side_recommend">
                <img
                  src="http://localhost:3000/images/Yeonju/haery.png"
                  alt="이해리 프로필 사진"
                />
                <div className="recommend_id">dlgofl85</div>
                <button>
                  <a href="">팔로우</a>
                </button>
              </li>
              <li className="right_side_recommend">
                <img
                  src="http://localhost:3000/images/Yeonju/minkyung.png"
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
