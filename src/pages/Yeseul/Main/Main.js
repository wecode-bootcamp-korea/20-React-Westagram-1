/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import User from './Components/User/User';
import Feed from './Components/Feed/Feed';
import SectionRight from './Components/SectionRight/SectionRight';
import '../../../Styles/Yeseul/base.scss';
import './Main.scss';

class MainYeseul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'yesl.k',
        profileImage:
          'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/159201707_1370690073293044_5504838793282701571_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=FdDa2rayJ6sAX_uXxr2&edm=ABfd0MgBAAAA&ccb=7-4&oh=865f8e0a94bbc66179b37229f3d6b9bb&oe=60B3271A&_nc_sid=7bff83',
      },
      feeds: [],
      stories: [
        {
          id: 1,
          name: 'gwilee',
          profileImage:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/103766508_267505241160259_6988402942883626618_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=MCGB5wt3c6MAX8LYXCb&edm=ALlQn9MBAAAA&ccb=7-4&oh=91329cb8aac0070a51f477ab5f2c4c42&oe=60A63740&_nc_sid=48a2a6',
          time: '16분',
        },
        {
          id: 2,
          name: '_moaol',
          profileImage:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/119800358_354868989042273_770246469915109902_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=SC4MI4G04iwAX_pNBiw&edm=ALlQn9MBAAAA&ccb=7-4&oh=d0576912d5db7559f72c084879ccf297&oe=60A553C4&_nc_sid=48a2a6',
          time: '3시간',
        },
        {
          id: 3,
          name: 'hyukyc',
          profileImage:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/42707193_247868809232568_1670895075900522496_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Mvb0zQo602YAX-TrVzE&edm=AAeKFY8BAAAA&ccb=7-4&oh=1008ecf199e4b5e4aa36034e3d89a173&oe=60A4D9A2&_nc_sid=c982ba',
          time: '20시간',
        },
        {
          id: 4,
          name: 'mozzi_na',
          profileImage:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/125458184_678698426183599_3935567234361894070_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=pcZm0-kFu2gAX_vHPBe&edm=ALlQn9MBAAAA&ccb=7-4&oh=208557571af9f85e3bfb824977d0f8c5&oe=60A6680C&_nc_sid=48a2a6',
          time: '25시간',
        },
      ],
      recommendations: [
        {
          id: 1,
          name: 'photo.by.ruby',
          profileImage:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/90086118_217157622737807_4136651709092986880_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=alw4C05kP50AX-ui58O&edm=AEF8tYYBAAAA&ccb=7-4&oh=4924ec7c2bb571b7e3cb83eaf57a5f49&oe=60A70F51&_nc_sid=a9513d',
          follower: '_angstblute',
        },
        {
          id: 2,
          name: 'yuhemian',
          profileImage:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/53848849_278758776351950_4301671031279452160_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=X0_HmKlmFoIAX9fYyzb&edm=AEF8tYYAAAAA&ccb=7-4&oh=3d9c8e270fbef2b4240f9c222c5c0255&oe=60A78C31&_nc_sid=a9513d',
          follower: 'mitzzul',
        },
        {
          id: 3,
          name: 'outofstyle.ig',
          profileImage:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/43912989_342504699845205_26342821132763136_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=1CznibMktiwAX9OVJJi&edm=AEF8tYYBAAAA&ccb=7-4&oh=3a2627949490d51a80c39569334f52de&oe=60A5878C&_nc_sid=a9513d',
          follower: 'asdfslk',
        },
      ],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Yeseul/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ feeds: data });
      });
  }
  render() {
    const { user, feeds, stories, recommendations } = this.state;

    return (
      <>
        <Nav />
        <main role="main">
          <section className="feeds">
            {feeds.map(feed => (
              <Feed
                key={feed.id}
                feedId={feed.id}
                userName={user.name}
                writer={feed.writer}
                contents={feed.contents}
              />
            ))}
          </section>
          <div className="main-right">
            <div className="user-profile">
              <User size="big" user={user}>
                <button className="align-right" type="button">
                  전환
                </button>
              </User>
            </div>
            <SectionRight title="스토리" users={stories} />
            <SectionRight title="회원님을 위한 추천" users={recommendations}>
              <button type="button" className="follow align-right">
                팔로우
              </button>
            </SectionRight>
          </div>
        </main>
      </>
    );
  }
}

export default MainYeseul;
