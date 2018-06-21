import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import NotFound from './404';
import Tags from './Tags';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts" exact component={Home} />
      <Route path="/tags" exact component={Tags} />
      <Route component={NotFound} />
      {/* <Route path="another_route" exact component={AnotherComponent} /> */}
    </Switch>
  </Router>
);

export default App;
