import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { WeiFundApp, Discover, NoMatch } from './components/index';
import createStore from './lib/store';


const store = createStore();
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path="/" component={WeiFundApp}>
        <Route path="/discover" component={Discover}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider >
  , document.getElementById('WeiFundApp')
);
