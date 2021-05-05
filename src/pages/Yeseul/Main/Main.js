import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import Feed from './Components/Feed/Feed';
import MainRight from './Components/MainRight/MainRight';
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
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Yeseul/feedData.json', {
      method: 'GET',
    })
      .then(feeds => feeds.json())
      .then(feeds => {
        this.setState({ feeds: feeds });
      });
  }
  render() {
    const { user, feeds } = this.state;
    const feed = feeds.map(feed => (
      <Feed
        key={feed.id}
        feedId={feed.id}
        userName={user.name}
        writer={feed.writer}
        contents={feed.contents}
      />
    ));

    return (
      <div className="mainYeseul">
        <Nav />
        <main>
          <section className="feeds">{feed}</section>
          <MainRight user={user} />
        </main>
      </div>
    );
  }
}

export default MainYeseul;
