import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

export default class Main extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{flex:1,marginTop: 22,alignItems:'center',justifyContent:'center'}}>
        <Modal
          animationType="slide" 
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');  
          }}>
          <View style={{marginTop: 22,width:200,height:200,backgroundColor:'rgba(227,111,158,0.7)',alignItems:'center',justifyContent:'center'}}>   
              <Text>Hello World!</Text> 
 
              <TouchableOpacity
                style = {{...styles.buttonStyle,borderColor:'white'}}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity
        style = {styles.buttonStyle}
          onPress={() => {
            this.setModalVisible(true); 
          }}>
             <Text>Show Modal</Text> 
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
    buttonStyle : {
    width:160 ,
    height:30,
    alignItems:'center',
    justifyContent:'center', 
    borderWidth:1,
    borderColor:'gray',
    borderRadius:3,
    shadowColor:'black',
    shadowOffset:{width : 0 , height : 2},
    shadowOpacity:0.1,
    shadowRadius:2,
    elevation:1
  }
}