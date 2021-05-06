import React from 'react';
import { throttle } from 'lodash';
import Article from './Components/Article/Article';
import SideBar from './Components/SideBar/SideBar';
import Nav from './Components/Nav/Nav';
import './Main.scss';
import USERS from './usersData.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USERS,
      storyRight: 0,
      articleData: [],
      preItems: 0,
      items: 2,
    };
    this.F00 = 265;
    this.infiniteScroll = throttle(this.infiniteScroll, 1000);
  }

  componentDidMount() {
    this.getData();
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  getData = () => {
    fetch('http://localhost:3000/data/Doeun/articleData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        let dataToAdd = res.slice(this.state.preItems, this.state.items);
        this.setState({
          articleData: [...this.state.articleData, ...dataToAdd],
        });
      });
  };

  infiniteScroll = () => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + 500 >= scrollHeight - clientHeight) {
      this.setState({
        preItems: this.state.items,
        items: this.state.items + 1,
      });
      this.getData();
    }
  };

  goToLogin = () => {
    this.props.history.push('/');
  };

  goRight = () => {
    if (this.state.storyRight < 765)
      this.setState({ storyRight: this.state.storyRight + this.F00 });
  };

  goLeft = () => {
    if (this.state.storyRight > 0)
      this.setState({ storyRight: this.state.storyRight - this.F00 });
  };

  render() {
    const { users, storyRight, articleData } = this.state;

    return (
      <div className="mainDoeun">
        <Nav users={users} />
        <div className="mainContainer">
          <main>
            <div className="storyBox">
              <i className="fas fa-chevron-circle-left" onClick={this.goLeft} />
              <i
                className="fas fa-chevron-circle-right"
                onClick={this.goRight}
              />
              <div className="storySpan" style={{ right: storyRight }}>
                {[...users].reverse().map(user => (
                  <div className="story" key={user.id}>
                    <div>
                      <img src="images/Doeun/storyring.png" id="storyring" />
                      <img
                        alt={`${user.id}'s profile image`}
                        src={'images/Doeun/' + user.id + '.jpg'}
                        id="storyprofile"
                      />
                    </div>
                    <p>
                      {user.id.length < 10
                        ? user.id
                        : user.id.slice(0, 9) + '...'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {articleData.map((a, index) => (
              <Article
                key={a.id + a.likes}
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
          <SideBar users={this.state.users} />
        </div>
        <script src="feed.js"></script>
      </div>
    );
  }
}

export default Main;
