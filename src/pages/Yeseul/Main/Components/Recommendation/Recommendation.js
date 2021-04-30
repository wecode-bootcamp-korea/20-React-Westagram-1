/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import UserList from '../UsrList/UserList';
import './Recommendation.scss';

class Recommendation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          name: 'photo.by.ruby',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/90086118_217157622737807_4136651709092986880_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=alw4C05kP50AX-ui58O&edm=AEF8tYYBAAAA&ccb=7-4&oh=4924ec7c2bb571b7e3cb83eaf57a5f49&oe=60A70F51&_nc_sid=a9513d',
          follower: '_angstblute',
        },
        {
          id: 2,
          name: 'yuhemian',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/53848849_278758776351950_4301671031279452160_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=X0_HmKlmFoIAX9fYyzb&edm=AEF8tYYAAAAA&ccb=7-4&oh=3d9c8e270fbef2b4240f9c222c5c0255&oe=60A78C31&_nc_sid=a9513d',
          follower: 'mitzzul',
        },
        {
          id: 3,
          name: 'outofstyle.ig',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/43912989_342504699845205_26342821132763136_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=1CznibMktiwAX9OVJJi&edm=AEF8tYYBAAAA&ccb=7-4&oh=3a2627949490d51a80c39569334f52de&oe=60A5878C&_nc_sid=a9513d',
          follower: 'asdfslk',
        },
      ],
    };
  }

  render() {
    const items = this.state.users.map(user => (
      <UserList parent="recommendation" key={user.id} user={user}>
        {this.props.children}
      </UserList>
    ));

    return (
      <aside className="recommendation give-border">
        <header className="recommendation__header space-between">
          <span className="recommendation__title">회원님을 위한 추천</span>
          <a href="#">모두 보기</a>
        </header>
        <ul>{items}</ul>
      </aside>
    );
  }
}

export default Recommendation;