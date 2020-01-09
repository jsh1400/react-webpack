import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './routes/Home/Home';
import Loading from './components/common/Loading';

const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ './routes/DynamicPage/DynamicPage'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './routes/NotFound/NoMatch'),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPAge} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
