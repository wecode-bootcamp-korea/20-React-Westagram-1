import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/login-doeun" component={} />
          <Route exact path="/main-doeun" component={} />
          <Route exact path="/login-yesl" component={} />
          <Route exact path="/main-yesl" component={} />
          <Route exact path="/login-hwisung" component={} />
          <Route exact path="/main-hwisung" component={} />
          <Route exact path="/login-yeonju" component={} />
          <Route exact path="/main-yeonju" component={} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;