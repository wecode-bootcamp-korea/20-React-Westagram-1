import React from 'react';
import Nav from './Components/Nav/Nav';
import Upload from './Components/Upload/Upload';
import Stories from './Components/Stories/Stories';
import Aside from './Components/Aside/Aside';
import './MainYeonju.scss';

class MainYeonju extends React.Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch('/data/Yeonju/uploadFeedsData.json')
      .then(res => res.json())
      .then(feedsData => {
        this.setState({
          feeds: feedsData,
        });
      });
  }

  render() {
    return (
      <div className="mainYeonju">
        <Nav />
        <main>
          <div className="feeds">
            <Stories />
            {this.state.feeds.map((feed, index) => {
              return (
                <Upload
                  key={index}
                  authorId={feed.author.authorId}
                  authorProfileImageSrc={feed.author.authorProfileImageSrc}
                  authorProfileImageAlt={feed.author.authorProfileImageAlt}
                  uploadImageSrc={feed.content.uploadImageSrc}
                  uploadImageAlt={feed.content.uploadImageAlt}
                  likesNum={feed.content.likesNum}
                  uploadTime={feed.content.uploadTime}
                />
              );
            })}
          </div>
          <Aside />
        </main>
      </div>
    );
  }
}

export default MainYeonju;
