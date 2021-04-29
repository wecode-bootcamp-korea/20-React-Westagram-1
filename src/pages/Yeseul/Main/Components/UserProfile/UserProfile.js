/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './UserProfile.scss';

class UserProfile extends React.Component {
  render() {
    return (
      <a href="#" className={`profile-image--${this.props.size}`}>
        <img
          alt={`${this.props.user.name}님의 프로필 사진`}
          src={this.props.user.image}
        />
      </a>
    );
  }
}

export default UserProfile;
