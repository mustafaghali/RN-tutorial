import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore,Middleware, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk'; 
import Router from './src/router.js';

export default class App extends Component {
  render() {
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return ( 
      <Provider store = {store}> 
           <Router/>
       </Provider>
     );
   }
  };