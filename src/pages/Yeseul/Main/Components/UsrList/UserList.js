/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import './UserList.scss';
import User from '../User/User';

class UserList extends React.Component {
  render() {
    const { parent, user, children } = this.props;
    return (
      <li className={`${parent}__item`} role="user-list">
        <User
          size="small"
          user={user}
          detailInfo={
            <p className="detail-info">
              {parent === 'recommendation'
                ? `${user.follower}님이 팔로우합니다`
                : `${user.time} 전`}
            </p>
          }
        >
          {children}
        </User>
      </li>
    );
  }
}

export default UserList;
