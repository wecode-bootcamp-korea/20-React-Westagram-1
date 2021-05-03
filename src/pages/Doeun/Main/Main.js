import React from 'react';
import Article from './Components/Article/Article';
import SideBar from './Components/SideBar/SideBar';
import Nav from './Components/Nav/Nav';
import './Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      USERS: [
        {
          id: 'skuukzky',
          profileImg: 'images/Doeun/skuukzky.jpg',
          description: '숮이 💄💅👡👠🎀👙🌂👗💌',
        },
        {
          id: '_imyour_joy',
          profileImg: 'images/Doeun/_imyour_joy.jpg',
          description: 'Joy 🌺',
        },
        {
          id: 'cafeknotted',
          profileImg: 'images/Doeun/cafeknotted.jpg',
          description: '노티드 Cafe Knotted',
        },
        {
          id: 'jennierubyjane',
          profileImg: 'images/Doeun/jennierubyjane.jpg',
          description: 'J',
        },
        {
          id: 'bts.bighotofficial',
          profileImg: 'images/Doeun/bts.bighotofficial.jpg',
          description: 'BTS | BANGTAN | 방탄소년단',
        },
        {
          id: 'skawngur',
          profileImg: 'images/Doeun/skawngur.jpg',
          description: '남주혁',
        },
        {
          id: '_victoria_bakery',
          profileImg: 'images/Doeun/_victoria_bakery.jpg',
          description: 'Victoria Bakery',
        },
        {
          id: 'yeojin9oo',
          profileImg: 'images/Doeun/yeojin9oo.jpg',
          description: '여진구 Yeo Jin Goo',
        },
        {
          id: 'akmu_suhyun',
          profileImg: 'images/Doeun/akmu_suhyun.jpg',
          description: '이수현 1999.05.04',
        },
        {
          id: 'nct_dream',
          profileImg: 'images/Doeun/nct_dream.jpg',
          description: 'NCT DREAM OFFICIAL',
        },
        {
          id: 'wm_ohmygirl',
          profileImg: 'images/Doeun/wm_ohmygirl.jpg',
          description: 'OHMYGIRL (오마이걸) WM ENT',
        },
        {
          id: 'twicetagram',
          profileImg: 'images/Doeun/twicetagram.jpg',
          description: 'TWICE',
        },
        {
          id: 'youngji_02',
          profileImg: 'images/Doeun/youngji_02.jpg',
          description: '이영지',
        },
        {
          id: 'saddlerhaus_bakery',
          profileImg: 'images/Doeun/saddlerhaus_bakery.jpg',
          description: 'french waffle',
        },
        {
          id: 'onyourm__ark',
          profileImg: 'images/Doeun/onyourm__ark.jpg',
          description: 'Mark 🐯🌱',
        },
        {
          id: 'songkang_b',
          profileImg: 'images/Doeun/songkang_b.jpg',
          description: '송강',
        },
        {
          id: 'roses_are_rosie',
          profileImg: 'images/Doeun/roses_are_rosie.jpg',
          description: 'ROSÉ',
        },
        {
          id: 'dlwlrma',
          profileImg: 'images/Doeun/dlwlrma.jpg',
          description: '이지금 IU',
        },
      ],
      storyRight: 0,
      articleData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Doeun/articleData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          articleData: data,
        });
      });
  }

  goToLogin = () => {
    this.props.history.push('/');
  };

  goRight = () => {
    if (this.state.storyRight < 765)
      this.setState({ storyRight: this.state.storyRight + 265 });
  };

  goLeft = () => {
    if (this.state.storyRight > 0)
      this.setState({ storyRight: this.state.storyRight - 265 });
  };

  render() {
    return (
      <div className="mainSass">
        <Nav USERS={this.state.USERS} />
        <div className="mainContainer">
          <main>
            <div className="storyBox">
              <i
                className="fas fa-chevron-circle-left"
                onClick={this.goLeft}
              ></i>
              <i
                className="fas fa-chevron-circle-right"
                onClick={this.goRight}
              ></i>
              <div
                className="storySpan"
                style={{ right: this.state.storyRight }}
              >
                {[...this.state.USERS].reverse().map((users, index) => (
                  <div className="story" key={index}>
                    <div>
                      <img src="images/Doeun/storyring.png" id="storyring" />
                      <img
                        alt="user's profile image"
                        src={'images/Doeun/' + users.id + '.jpg'}
                        id="storyprofile"
                      />
                    </div>
                    <p>
                      {users.id.length < 10
                        ? users.id
                        : users.id.slice(0, 9) + '...'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {this.state.articleData.map((a, index) => (
              <Article
                key={index}
                index={index}
                profileImg={a.profileImg}
                id={a.id}
                feedImg={a.feedImg}
                saySomething={a.saySomething}
                hour={a.hour}
                likes={a.likes}
              />
            ))}
          </main>
          <SideBar USERS={this.state.USERS} />
        </div>
        <script src="feed.js"></script>
      </div>
    );
  }
}

export default Main;
