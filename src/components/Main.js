import React, { Component } from 'react';
import {View } from 'react-native';
import GreetingText from './common/Greeting.js'



export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <GreetingText name='Rexxar' />
        <GreetingText name='Jaina' />
        <GreetingText name='Valeera' /> 
      </View>
    );
  }
};