import React, { Component } from 'react';

import Login from './src/components/Login.js';
import {Provider} from 'react-redux';
import {createStore,Middleware, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';


export default class App extends Component {
  render() {
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return ( 
      <Provider store = {store}>
       <Login/>
       </Provider>
     );
   }
  };