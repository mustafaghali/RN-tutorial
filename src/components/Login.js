

import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
  NativeModules
} from 'react-native';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import colorCodes from '../themes/mainStyle.js';
import TextInputwithIcon from './common/TextInputWithIcon.js';
import {emailChanged,passwordChanged} from '../actions';
import {Actions} from 'react-native-router-flux';

class Login extends Component {

  constructor(props)
  {
    super(props)
    this.state = {
      emailValue:'',
      passwordValue:'',
      testInt:3

    }
  }



   onEmailChange =  (text)=>{
     this.setState({emailValue:text});
  } 

  onPasswordChange =  (text)=>{
    this.setState({passwordValue:text});
 } 
 

  render() {
    return (
      <LinearGradient colors = {colorCodes.vodared_G}style = {{flex:1,justifyContent:'space-between'}}> 
          <View style= {{alignItems:'center',justifyContent:'center',marginTop:20}}>
            <Image 
            resizeMode = 'contain'
             style = {{width:150,height:150}}
            source = {require('../../assets/images/v.png')}/> 
            <Text style = {{fontSize:50,color:'white',fontFamily:'CloudCalligraphy'}}> Vodammerce </Text> 
                <Text style = {{color:'#DADFE0'}}>    The ultimate online shopping experience  </Text> 
            </View>

            {/* <View testID = {'inputs'}> */}
            <TextInputwithIcon 
              testID = {'userEmailInput'}
              textValue = {this.props.email}
              onTextChanged = {(text)=>{this.props.emailChanged(text)}}
              iconName = 'envelope'
              iconColor = 'white'
              placeholder = 'email'

            /> 


            <TextInputwithIcon 
              testID = {'userPasswordInput'}
              textValue = {this.props.password}
              onTextChanged = {(text)=>{this.props.passwordChanged(text)}}
              iconName = 'unlock-alt'
              iconColor = 'white' 
              secure = {true}
              placeholder = 'password'
            />
              {/* </View> */}


              <View style= {{justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity  
                 style = {{width:Dimensions.get('window').width*2/3,
                 height:70,borderWidth:1,
                 borderColor:'white',
                 borderRadius:10,justifyContent:'center',
                 alignItems:'center'
                 
                }}
                onPress = {() =>{
                //   NativeModules.ImagePicker.openSelectDialog(
                //   {}, // no config yet 
                //   (uri) => { console.log(uri) }, 
                //   (error) => { console.log(error) }
                // )
                 NativeModules.ToastModule.show('it works');
               //  Actions.Home();
                 Actions.push('HomeTab');
              }}
              >

              <Text style = {{color:'white',fontSize:25}}> Login </Text>

                </TouchableOpacity>

                  <View style = {{flexDirection:'row',justifyContent:'space-between',width:Dimensions.get('window').width -10,marginBottom:10}}> 
                <TouchableOpacity
                                onPress = {()=>{}}
                             >
                            <Text style={{color: 'white',textDecorationLine:'underline'}}>
                              { " Don't have an account ? "}
                              </Text>
                </TouchableOpacity>       
                                
                <TouchableOpacity>
                               <Text style={{color: 'white',textDecorationLine:'underline'}}>  
                                 { " Forgot Password ?"}
                                </Text>
                </TouchableOpacity>
               </View>
                </View>
      </LinearGradient>
   
    );
  }
}


const mapStateToProps = (state) =>{
    const {email,password}  = state.LoginPageState;

    return {email,password};
} 


export default connect(mapStateToProps,{emailChanged,passwordChanged})(Login);