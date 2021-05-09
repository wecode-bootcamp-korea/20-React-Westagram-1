import React from 'react';
import { Link } from 'react-router-dom';
import './MainTeam1.scss';

class MainTeam1 extends React.Component {
  render() {
    return (
      <div className="mainTeam1">
        <div>
          <Link to="login-doeun">
            <button>Doeun Login 🖥</button>
          </Link>
          <Link to="main-doeun">
            <button>Doeun Main 🖱</button>
          </Link>
        </div>
        <div>
          <Link to="login-yesl">
            <button>Yeseul Login 🖥</button>
          </Link>
          <Link to="main-yesl">
            <button>Yeseul Main 🖱</button>
          </Link>
        </div>
        <div>
          <Link to="login-hwisung">
            <button>Hwisung Login 🖥</button>
          </Link>
          <Link to="main-hwisung">
            <button>Hwisung Main 🖱</button>
          </Link>
        </div>
        <div>
          <Link to="login-yeonju">
            <button>Yeonju Login 🖥</button>
          </Link>
          <Link to="main-yeonju">
            <button>Yeonju Main 🖱</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainTeam1;
