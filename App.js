import React, { Component } from 'react';

import Login from './src/components/Login.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';

export default class App extends Component {
  render() {
    return ( 
      <Provider store = {createStore(reducers)}>
       <Login/>
       </Provider>
     );
   }
  };