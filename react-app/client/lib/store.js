import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import promiseMiddleware from './promiseMiddleware';
import * as reducers from './reducers/index';



export default function() {
  // var reducer = combineReducers({...reducers, routing : routerReducer});
  // var store = createStore(reducer, compose(applyMiddleware(promiseMiddleware), applyMiddleware(routerMiddleware)));

  // Having an issue with routerMiddleware and promiseMiddleware

  var reducer = combineReducers({...reducers});
  var store = createStore(reducer, compose(applyMiddleware(promiseMiddleware)));
  return store;
}
