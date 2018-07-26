
import React, { Component } from 'react';
import {Button,Alert} from 'react-native';

export default button = (props) =>{
      return (
        <Button
            onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
         />
      );
  };
 

