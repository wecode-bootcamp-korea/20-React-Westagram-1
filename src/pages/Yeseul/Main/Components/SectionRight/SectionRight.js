import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserList from '../UserList/UserList';
import './SectionRight.scss';

class SectionRight extends Component {
  render() {
    const { title, users, children } = this.props;

    return (
      <section className="sectionRight give-border">
        <div className="title space-between">
          <span>{title}</span>
          <Link to="/main-yeseul">모두 보기</Link>
        </div>
        <UserList users={users}>{children}</UserList>
      </section>
    );
  }
}

export default SectionRight;
