import React, { useState } from 'react';
import './Nav.scss';
import { Link, withRouter } from 'react-router-dom';

function Nav(props) {
  function goToLogin() {
    props.history.push('/login-doeun');
  }

  let [matchedUsers, resetMatchedUsers] = useState([]);

  function search(e) {
    resetMatchedUsers(
      props.USERS.filter(user => user.id.startsWith(e.target.value))
    );
  }

  return (
    <nav>
      <div>
        <h1 onClick={goToLogin}>westagram</h1>
        <form className="search">
          <input
            type="text"
            placeholder="검색"
            onClick={search}
            onInput={search}
          />
          <i className="fas fa-search"></i>
          <div className="searchList">
            <div className="idList">
              {matchedUsers.map((users, index) => (
                <div key={index} class="searchedUser">
                  <img alt="user's profile image" src={users.profileImg} />
                  <div class="userId">
                    <p class="id">{users.id}</p>
                    <p class="gray twelve" id="description">
                      {users.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
        <div className="icons">
          <img alt="home" src="images/Doeun/home.png" />
          <img alt="direct message" src="images/Doeun/dm.png" />
          <i className="far fa-compass"></i>
          <img alt="like" src="images/Doeun/heart.png" />
          <img className="profile" src="images/Doeun/profile.jpg" />
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Nav);
