/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './User.scss';

class User extends Component {
  render() {
    const { size, user, detailInfo, children } = this.props;

    return (
      <div className="user align-item-center">
        <a href="#" className={`profile-image--${size}`}>
          <img alt={`${user.name}님의 프로필 사진`} src={user.profileImage} />
        </a>
        <div>
          <a href="#" className="user-name">
            {user.name}
          </a>
          {detailInfo}
        </div>
        {children}
      </div>
    );
  }
}

export default User;
