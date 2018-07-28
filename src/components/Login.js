import React, {Component} from 'react';
import {Text,
    Image,
    Dimensions,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../themes/style1';
import Icon from 'react-native-vector-icons/FontAwesome';
import {updateEmailInput,ResetLoginForm} from '../actions';
import {connect} from 'react-redux';

class Login extends Component {
     
    constructor() {
        super();
        this.state = {
        email:'',
        password:'',
        loading: true
        };
     }

     componentDidMount(){
        console.log(this.props.email); 
     }

    render(){
        return (
            <LinearGradient colors={colors.RedMistGradient} style={{flex:1,alignItems:'center',justifyContent:'flex-start',paddingTop:30}}>
                 <Image 
                          source={require('../../assets/img/vf-logo-large.png')}
                             resizeMode='contain' 
                           style={{height:Dimensions.get('window').height * 0.2, width : Dimensions.get('window').height * 0.2}}  
                  /> 
                
                <Text style = {{fontSize:50,color:'white',fontFamily:'CloudCalligraphy'}}> Vodammerce </Text> 
                <Text style = {{color:'#DADFE0'}}>    The ultimate online shopping experience  </Text> 
                


            <View style = {{flex:1,justifyContent:'space-between',alignItems:'center'}}>  
                <View style = {{marginTop:20,justifyContent:'space-around'}} >  

                 <View>
                  <View style = {styles.TextInputContainer}>   
                      <Icon name='envelope' color='white' size={20}/>       
                      <TextInput style = {{flex:1,color:'white',fontSize:15,marginLeft:10,textAlign:'center'}}    
                        placeholder = 'Email'
                        underlineColorAndroid = 'white'
                        placeholderTextColor = 'white'
                        value = {this.props.email}
                        onChangeText ={ this.props.updateEmailInput}
                        />   
                  </View>

                  <View style = {styles.TextInputContainer}>   
                      <Icon name='unlock-alt' color='white' size={30}/>      
                      <TextInput style = {{flex:1,color:'white',fontSize:15,marginLeft:10,textAlign:'center'}}
                        placeholder = 'Password'
                        secureTextEntry = {true}
                        underlineColorAndroid = 'white' 
                        placeholderTextColor = 'white'
                        value = {this.props.password}
                        />   
                  </View>
                </View>
                
                
                <TouchableOpacity
                  style = {
                      {
                          width:Dimensions.get('window').width * 2/3,  
                          height : Dimensions.get('window').height * 1/10, 
                          borderColor:'white',
                          borderWidth:1,
                          alignItems:'center',
                          justifyContent:'center', 
                          borderRadius:30, 
                          marginTop:30, 
                    }
                 }
                 onPress = {this.props.ResetLoginForm}
                >
                    <Text style={{color:'white'}}>RESET Login</Text> 
                </TouchableOpacity>
               </View>
               <View style = {{flexDirection:'row',justifyContent:'space-between',width:Dimensions.get('window').width -10,marginBottom:10}}> 
                <TouchableOpacity
                               
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

const styles = StyleSheet.create(
    {
       TextInputContainer: {
          width:Dimensions.get('window').width*2/3,   
          height:Dimensions.get('window').height*1/10,
          flexDirection:'row',
          justifyContent:'flex-start',
          paddingLeft:20,
          alignItems:'center',
          backgroundColor:'transparent', 
     }
}
)

const mapStateToProps = (state)=>{   
      const  {email,password,loading} = state.loginForm;
    return ( {email,password,loading});
 }


 export default connect (mapStateToProps,{updateEmailInput,ResetLoginForm})(Login);