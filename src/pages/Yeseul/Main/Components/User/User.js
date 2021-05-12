import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './User.scss';

class User extends Component {
  render() {
    const { size, user, detailInfo, children } = this.props;

    return (
      <div className="user align-item-center">
        <Link to="/main-yeseul" className={`profile-image--${size}`}>
          <img alt={`${user.name}님의 프로필 사진`} src={user.profileImage} />
        </Link>
        <div>
          <Link to="/main-yeseul" className="user-name">
            {user.name}
          </Link>
          {detailInfo}
        </div>
        {children}
      </div>
    );
  }
}

export default User;
