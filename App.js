/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Login from './src/components/Login.js';
import Home from './src/components/Home';
import About from './src/components/About';
import Router from './src/router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/reducers/';   

export default class App extends Component {

  store = createStore(reducers);

  render() {
    return (
      <Provider store ={this.store}>
           <Router/>
      </Provider>
   
    );
  }
}
