/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import UserList from '../UsrList/UserList';
import './Story.scss';

class Story extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          name: 'gwilee',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/103766508_267505241160259_6988402942883626618_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=MCGB5wt3c6MAX8LYXCb&edm=ALlQn9MBAAAA&ccb=7-4&oh=91329cb8aac0070a51f477ab5f2c4c42&oe=60A63740&_nc_sid=48a2a6',
          time: '16분',
        },
        {
          id: 2,
          name: '_moaol',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/119800358_354868989042273_770246469915109902_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=SC4MI4G04iwAX_pNBiw&edm=ALlQn9MBAAAA&ccb=7-4&oh=d0576912d5db7559f72c084879ccf297&oe=60A553C4&_nc_sid=48a2a6',
          follower: '3시간',
        },
        {
          id: 3,
          name: 'hyukyc',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/42707193_247868809232568_1670895075900522496_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Mvb0zQo602YAX-TrVzE&edm=AAeKFY8BAAAA&ccb=7-4&oh=1008ecf199e4b5e4aa36034e3d89a173&oe=60A4D9A2&_nc_sid=c982ba',
          follower: '20시간',
        },
        {
          id: 4,
          name: 'mozzi_na',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/125458184_678698426183599_3935567234361894070_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=pcZm0-kFu2gAX_vHPBe&edm=ALlQn9MBAAAA&ccb=7-4&oh=208557571af9f85e3bfb824977d0f8c5&oe=60A6680C&_nc_sid=48a2a6',
          follower: '25시간',
        },
      ],
    };
  }

  render() {
    const items = this.state.users.map(user => (
      <UserList parent="story" key={user.id} user={user}></UserList>
    ));

    return (
      <section className="story give-border">
        <header className="story__header space-between">
          <span className="story__title">스토리</span>
          <a href="#">모두 보기</a>
        </header>
        <ul>{items}</ul>
      </section>
    );
  }
}

export default Story;
