/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Nav from './Components/Nav/Nav';
import User from './Components/User/User';
import Feed from './Components/Feed/Feed';
import Story from './Components/Story/Story';
import Recommendation from './Components/Recommendation/Recommendation';
import '../../../Styles/Yeseul/base.scss';
import './Main.scss';

class MainYeseul extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'yesl.k',
        profileImage:
          'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/159201707_1370690073293044_5504838793282701571_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=FdDa2rayJ6sAX_uXxr2&edm=ABfd0MgBAAAA&ccb=7-4&oh=865f8e0a94bbc66179b37229f3d6b9bb&oe=60B3271A&_nc_sid=7bff83',
      },
      feeds: [
        {
          id: 1,
          contents: {
            postedImage:
              'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/180611498_169106325101635_5721169358371100661_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=dwdAAUz9SOcAX_tQ68L&edm=AP_V10EBAAAA&ccb=7-4&oh=8954605efb80cb162fe25446e9588ca1&oe=60B18236&_nc_sid=4f375e',
            description: 'No.S009',
            likesNum: 503,
            date: 'April 29, 2021.',
          },
          writer: {
            name: 'objental',
            profileImage:
              'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/122493551_276052993647146_2009192636666657519_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=zK_EvJTWqwAAX9zB93x&edm=AEF8tYYBAAAA&ccb=7-4&oh=00a7fd638bc158820530230c64543d99&oe=60A6166E&_nc_sid=a9513d',
          },
        },
      ],
    };
  }
  render() {
    const { user, feeds } = this.state;

    return (
      <>
        <Nav />
        <main role="main">
          <section className="feeds">
            {feeds.map(feed => (
              <Feed
                key={feed.id}
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
            <Story />
            <Recommendation />
          </div>
        </main>
      </>
    );
  }
}

export default MainYeseul;
