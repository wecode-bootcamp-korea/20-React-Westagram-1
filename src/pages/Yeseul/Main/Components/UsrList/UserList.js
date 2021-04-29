/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import './UserList.scss';

class UserList extends React.Component {
  render() {
    return (
      <li
        className={`${this.props.parent}__item align-item-center`}
        role="user-list"
      >
        <UserProfile size="small" user={this.props.user} />
        <div>
          <a href="#" className="user-name">
            {this.props.user.name}
          </a>
          <p className="detail-info">
            {this.props.parent === 'recommendation'
              ? `${this.props.user.follower}님이 팔로우합니다`
              : `${this.props.user.time} 전`}
          </p>
        </div>
        {this.props.children}
      </li>
    );
  }
}

export default UserList;
