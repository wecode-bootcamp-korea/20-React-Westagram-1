import React from 'react';
import './Aside.scss';

class Aside extends React.Component {
  render() {
    return (
      <>
        <div class="Aside">
          <div class="profile">
            <div>
              <img class="wecode_img" src="/images/wecode.png" alt="프로필" />
            </div>
            <div class="wecode_info">
              <div class="wecode_id">wecode_bootcamp</div>
              <div class="wecode_name">Wecode | 위코드</div>
            </div>
          </div>
          <div class="story_list">
            <span class="story">스토리</span>
            <span class="seeAll_1">모두보기</span>
            <div>
              <img
                src="/images/travelreason.png"
                class="story_list_img"
                alt="프로필"
              />
            </div>
            <div class="story_list_info">
              <div class="story_list_id">travelreason</div>
              <div class="story_list_time">5분전</div>
            </div>
            <div class="story_list2">
              <img
                src="/images/seoultravel.png"
                alt=""
                class="story_list_img"
                alt="프로필"
              />
              <a>seoultravel</a>
              <a>2시간전</a>
            </div>
            <div class="story_list3">
              <img
                src="/images/greedeat.png"
                class="story_list_img"
                alt="프로필"
              />
              <a>greedeat</a>
              <a>20분전</a>
            </div>
          </div>
          <div class="recommend">
            <span class="for_recommend">회원님을 위한 추천</span>
            <span class="seeAll_2">모두보기</span>
            <div class="recommend_list1">
              <img
                src="/images/musinsa.png"
                class="recommend_list_img"
                alt="프로필"
              />
              <a>musinsa</a>
              <a>3분전</a>
            </div>
            <div class="recommend_list2">
              <img
                src="/images/dingo_travel.png"
                class="recommend_list_img"
                alt="프로필"
              />
              <a>dingo_travel</a>
            </div>
            <a>휘성님 외 2명이</a>
            <div class="recommend_list3">
              <img src="/images/todayhouse.png" class="recommend_list_img" />
              <a>todayhouse</a>
              <a>휘성님 외 2명이</a>
            </div>
          </div>
          <footer class="info">
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
