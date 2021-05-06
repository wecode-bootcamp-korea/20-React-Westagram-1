import React from 'react';
import './Nav.scss';
import { withRouter } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      matchedUsers: [],
    };
  }

  goToLogin = () => {
    this.props.history.push('/login-doeun');
  };

  search = e => {
    this.setState({
      matchedUsers: this.props.users.filter(user =>
        user.id.startsWith(e.target.value)
      ),
    });
  };

  render() {
    const { matchedUsers } = this.state;

    return (
      <nav>
        <div>
          <h1 onClick={this.goToLogin}>westagram</h1>
          <form className="search">
            <input
              type="text"
              placeholder="검색"
              onClick={this.search}
              onInput={this.search}
            />
            <i className="fas fa-search" />
            <div className="searchList">
              <div className="idList">
                {!matchedUsers.length ? (
                  <p>검색결과가 없습니다.</p>
                ) : (
                  matchedUsers.map(users => (
                    <div key={users.id} className="searchedUser">
                      <img alt="user's profile image" src={users.profileImg} />
                      <div className="userId">
                        <p className="id">{users.id}</p>
                        <p className="gray twelve" id="description">
                          {users.description}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </form>
          <div className="icons">
            <img alt="home" src="images/Doeun/home.png" />
            <img alt="direct message" src="images/Doeun/dm.png" />
            <i className="far fa-compass" />
            <img alt="like" src="images/Doeun/heart.png" />
            <img className="profile" src="images/Doeun/profile.jpg" />
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
