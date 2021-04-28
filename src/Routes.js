import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginDoeun from './pages/Doeun/Login/Login';
import MainDoeun from './pages/Doeun/Main/Main';

import LoginHwisung from './pages/hwisung/Login/Login';
import Mainhwisung from './pages/hwisung/Main/Main';

import LoginYeonju from './pages/Yeonju/Login/Login';
import MainYeonju from './pages/Yeonju/Main/Main';

import LoginYeseul from './pages/Yeseul/Login/Login';
import MainYeseul from './pages/Yeseul/Main/Main';

class Routes extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/login-doeun" component={LoginDoeun} />
          <Route exact path="/main-doeun" component={MainDoeun} />
          <Route exact path="/login-yesl" component={LoginHwisung} />
          <Route exact path="/main-yesl" component={Mainhwisung} />
          <Route exact path="/login-hwisung" component={LoginYeonju} />
          <Route exact path="/main-hwisung" component={MainYeonju} />
          <Route exact path="/login-yeonju" component={LoginYeseul} />
          <Route exact path="/main-yeonju" component={MainYeseul} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;