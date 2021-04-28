import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginDoeun from './pages/Doeun/Login/Login';
import MainDoeun from './pages/Doeun/Main/Main';

import LoginHwisung from './pages/Hwisung/Login/Login';
import Mainhwisung from './pages/Hwisung/Main/Main';

import LoginYeonju from './pages/Yeonju/Login/Login';
import MainYeonju from './pages/Yeonju/Main/Main';

import LoginYeseul from './pages/Yeseul/Login/Login';
import MainYeseul from './pages/Yeseul/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-doeun" component={LoginDoeun} />
          <Route exact path="/main-doeun" component={MainDoeun} />
          <Route exact path="/login-yesl" component={LoginYeseul} />
          <Route exact path="/main-yesl" component={MainYeseul} />
          <Route exact path="/login-hwisung" component={LoginHwisung} />
          <Route exact path="/main-hwisung" component={MainHwisung} />
          <Route exact path="/login-yeonju" component={LoginYeonju} />
          <Route exact path="/main-yeonju" component={MainYeonju} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
