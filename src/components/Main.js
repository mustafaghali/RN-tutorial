import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import Button from './common/Button.js';
import Touchables from './common/Touchables.js';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
render() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>   
       <Button/>
       <Touchables/>
    </View>
  ); 
}
}