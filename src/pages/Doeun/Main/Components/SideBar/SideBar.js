import React from 'react';
import './SideBar.scss';
import SideFooter from '../SideFooter/SideFooter';

function SideBar(props) {
  const recommendUsers = props.USERS.slice(6, 11);

  return (
    <div className="sidebar">
      <aside>
        <div className="myprofile">
          <div className="profile">
            <img alt="users profile image" src="images/Doeun/profile.jpg" />
          </div>
          <div className="name">
            <p className="id">do.silv</p>
            <p className="gray">김도은</p>
          </div>
          <div className="change">
            <p className="blue">전환</p>
          </div>
        </div>
        <div className="recommend">
          <span className="gray bold">회원님을 위한 추천</span>
          <span className="twelve bold">모두 보기</span>
          {recommendUsers.map(i => (
            <div>
              <div class="user">
                <div class="profile">
                  <img
                    alt="user's profile image"
                    src={'images/Doeun/' + i.id + '.jpg'}
                  />
                </div>
                <div class="userid">
                  <p class="id">{i.id}</p>
                  <p class="gray twelve">{i.description}</p>
                </div>
                <div class="follow">
                  <p class="blue">팔로우</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
      <SideFooter />
    </div>
  );
}

export default SideBar;
