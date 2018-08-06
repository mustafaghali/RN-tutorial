/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from "react-redux";
import {
  View
} from 'react-native';
import Login from './src/components/Login.js';
import configureStore from "./src/store";

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Login />
      </Provider>
    );
  }
}
