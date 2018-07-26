
import React, { Component } from 'react';
import { Text } from 'react-native';


export default class Blink extends Component {
    constructor(props) {
      super(props);
      this.state = {isShowingText: true};
  
      // Toggle the state every 2 seconds
      setInterval(() => {
        this.setState(previousState => {
          return { isShowingText: !previousState.isShowingText };
        });
      }, 2000);
    }
  
    render() {
      let display = this.state.isShowingText ? this.props.text : ' ';
      return (
        <Text style = {{color:this.props.TextColor}}>{display}</Text>
      );
    }
  }
  
  