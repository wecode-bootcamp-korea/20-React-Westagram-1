import React from 'react';
import './Aside.scss';

class Aside extends React.Component {
  render() {
    return (
      <>
        <div className="Aside">
          <div className="profile">
            <div>
              <img
                className="profileImg"
                src="/images/Hwisung/wecode.png"
                alt="프로필"
              />
            </div>
            <div className="profileInfo">
              <div className="profileId">wecode_bootcamp</div>
              <div className="profileName">Wecode | 위코드</div>
            </div>
          </div>
          <div className="storyList">
            <div className="StoryAll">
              <span className="story">스토리</span>
              <span className="seeAll1">모두보기</span>
            </div>
            <div>
              <img
                src="/images/Hwisung/travelreason.png"
                className="storyListImg"
                alt="프로필"
              />
            </div>
            <div className="storyListInfo">
              <div className="story_list_id">travelreason</div>
              <div className="story_list_time">5분전</div>
            </div>
            <div className="story_list2">
              <img
                src="/images/Hwisung/seoultravel.png"
                alt=""
                className="storyListImg"
              />
              <div>seoultravel</div>
              <div>2시간전</div>
            </div>
            <div className="story_list3">
              <img
                src="/images/Hwisung/greedeat.png"
                className="storyListImg"
                alt="프로필"
              />
              <a>greedeat</a>
              <a>20분전</a>
            </div>
          </div>
          <div className="recommend">
            <span className="for_recommend">회원님을 위한 추천</span>
            <span className="seeAll2">모두보기</span>
            <div className="recommend_list1">
              <img
                src="/images/Hwisung/musinsa.png"
                className="recommendListImg"
                alt="프로필"
              />
              <a>musinsa</a>
              <a>3분전</a>
            </div>
            <div className="recommend_list2">
              <img
                src="/images/Hwisung/dingo_travel.png"
                className="recommendListImg"
                alt="프로필"
              />
              <a>dingo_travel</a>
            </div>
            <a>휘성님 외 2명이</a>
            <div className="recommend_list3">
              <img
                src="/images/Hwisung/todayhouse.png"
                className="recommendListImg"
                alt="오늘의집"
              />
              <a>todayhouse</a>
              <a>휘성님 외 2명이</a>
            </div>
          </div>
          <footer className="info">
            소개 ・ 도움말 ・ 홍보 센터 ・ API ・ 채용 정보 ・ 개인정보처리방침
            ・ 약관 ・ 위치 ・ 인기 계정 ・ 해시태그 ・ 언어
            <br />
            <br /> ©2021 INSTAGRAM FROM FACEBOOK
          </footer>
        </div>
      </>
    );
  }
}

export default Aside;
