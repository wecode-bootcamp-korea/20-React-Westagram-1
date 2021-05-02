/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import UserList from '../UserList/UserList';
import './SectionRight.scss';

class SectionRight extends Component {
  render() {
    const { title, users, children } = this.props;

    return (
      <section className="sectionRight give-border">
        <div className="title space-between">
          <span>{title}</span>
          <a href="#">모두 보기</a>
        </div>
        <UserList users={users}>{children}</UserList>
      </section>
    );
  }
}

export default SectionRight;
