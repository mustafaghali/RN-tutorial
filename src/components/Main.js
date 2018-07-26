import React, { Component } from 'react';
import {View } from 'react-native';
import Blink from './common/Blink.js'



export default class Main extends Component {
  render() {
    return (
      <View style =  {{flex:1, alignItems:'center',justifyContent:'center', backgroundColor:'#e60000'}}> 
        <Blink text='I love to blink'  TextColor = 'white' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}