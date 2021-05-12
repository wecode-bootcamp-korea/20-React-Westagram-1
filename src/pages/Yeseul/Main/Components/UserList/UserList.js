/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/aria-role */
import React, { Component } from 'react';
import './UserList.scss';
import User from '../User/User';

class UserList extends Component {
  render() {
    const { users, children } = this.props;
    return (
      <ul className="userList">
        {users.map(user => (
          <li key={user.id}>
            <User
              size="small"
              user={user}
              detailInfo={
                <p className="detail-info">
                  {user.follower
                    ? `${user.follower}님이 팔로우합니다`
                    : `${user.time} 전`}
                </p>
              }
            >
              {children}
            </User>
          </li>
        ))}
      </ul>
    );
  }
}

export default UserList;
