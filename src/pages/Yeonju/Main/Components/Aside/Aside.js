import React from 'react';
import { Link } from 'react-router-dom';
import './Aside.scss';

class Aside extends React.Component {
  render() {
    return (
      <div className="aside">
        <aside className="main_right">
          <header className="right_side_top">
            <img
              className="right_side_myprofile"
              alt="나의 프로필 사진"
              src="http://localhost:3000/images/Yeonju/yeonju.jpg"
            />
            <h1 className="right_side_myid"> yyeon_jju</h1>
            <button className="right_side_mybutton">
              <Link to="">전환</Link>
            </button>
          </header>
          <article className="right_side_article">
            <span>회원님을 위한 추천</span>
            <button>
              <Link to="">모두 보기</Link>
            </button>
          </article>
          <section>
            <ul>
              {ASIDE_RECOMMEND_LIST.map((el, index) => {
                return (
                  <li className="right_side_recommend" key={index}>
                    <img
                      alt={`${el.alt}의 프로필 사진`}
                      src={`http://localhost:3000/images/Yeonju/${el.img}`}
                    />
                    <div className="recommend_id">{el.instagramId}</div>
                    <button>
                      <Link to="">{el.follow}</Link>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        </aside>
      </div>
    );
  }
}

export default Aside;

const ASIDE_RECOMMEND_LIST = [
  {
    alt: '태연',
    img: 'taeyeon.jpg',
    instagramId: 'taeyeon_ss',
    follow: '팔로우',
  },
  {
    alt: '아이유',
    img: 'IU.png',
    instagramId: 'dlwlrma',
    follow: '팔로우',
  },
  {
    alt: '이해리',
    img: 'haery.png',
    instagramId: 'dlgofl85',
    follow: '팔로우',
  },
  {
    alt: '강민경',
    img: 'minkyung.png',
    instagramId: 'iammingki',
    follow: '팔로우',
  },
];
