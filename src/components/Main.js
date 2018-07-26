import React, { Component } from 'react';
import {View } from 'react-native';
import GreetingText from './common/Greeting.js'



export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <GreetingText name='Vodafone' />
        <GreetingText name='Mustafa' />
        <GreetingText name='Moh' /> 
      </View>
    );
  }
};