import React, { Component } from 'react';
import {Text,
        View,
        Image,
        TouchableOpacity,
        Dimensions,
        Linking
    } from 'react-native'; 
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import Header from './common/Header';
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/FontAwesome';

//View.PropTypes
class About extends Component {

    render(){
        
        return (
            <View style = {{flex:1,alignItems:'center',backgroundColor:'white'}}>
               <Header headerText = "About Vodammerce" isMenu = {false}/> 
               <Image       
                             style = {{ borderColor : 'gray',
                             borderWidth: 0,
                             width:200,  
                             height:200,  
                             alignItems:'center',
                             justifyContent:'flex-end'
                             }} 
                             resizeMode = "contain"
                              source={{uri:'https://cdn.worldvectorlogo.com/logos/vodafone-sim.svg'}}    
                             />
                <Text style = {{marginLeft:30,marginRight:30,color:'#4F5452',textAlign:'center',fontSize:20}}>{"This is a fake App Please don't use it \n it gonna affect your "+this.props.damageType}</Text>  
                <View style = {{flexDirection:'row',marginTop:20,alignItems:'center',justifyContent:'space-around'}}> 
                    <TouchableOpacity
                       style = {{...styles.SocialMediaButton,backgroundColor:'#3b5998'}}
                        onPress= {()=> {Linking.openURL('https://www.facebook.com/Vodafone.Egypt/')
                                  .catch(err => console.error('An error occurred opening facebook link', err));}}> 
                       <Icon name = 'facebook-square' style = {styles.SocialMediaIcon}/>

                    </TouchableOpacity>

                     <TouchableOpacity
                       style = {{...styles.SocialMediaButton,backgroundColor:'#c32aa3'}}
                           >
                       <Icon name = 'instagram' style = {styles.SocialMediaIcon}/>
                    </TouchableOpacity>

                     <TouchableOpacity
                       style = {{...styles.SocialMediaButton,backgroundColor:'#1da1f2'}}
                      >   
                       <Icon name = 'twitter-square' style = {styles.SocialMediaIcon}/>
                    </TouchableOpacity>

                      <TouchableOpacity
                       style = {{...styles.SocialMediaButton,backgroundColor:'#A8A8A8'}}
                     >
                       <Icon name = 'globe' style = {styles.SocialMediaIcon}/>
                    </TouchableOpacity>

                        </View>
                        <TouchableOpacity
                       style = {{
                         flexDirection:'row',
                         width:200,
                         marginTop:10,
                        alignItems:'center',
                        justifyContent:'center',
                       }}
                        onPress={() => Communications.phonecall('+249905705498', true)}
                        > 
                      <View style = {{width:20,height:20,borderRadius:10,borderWidth:1,borderColor:'gray',alignItems:'center',justifyContent:'center'}}> 
                       <Icon name = 'phone' 
                       style = {{ 
                       color:'gray', 
                       fontSize:18,
                       }}/>
                       </View>
                        <Text style = {{color:'blue'}}> {'+249905705498'} </Text>             
                    </TouchableOpacity>

                     <TouchableOpacity
                       style = {{  
                        flexDirection:'row',   
                       width:200,
                        marginTop:5,  
                        alignItems:'center',
                        justifyContent:'center',
                      }}
                         onPress= {()=> {Linking.openURL('mailto:ahmed.king@vodafone.com')
                                  .catch(err => console.error('An error occurred opening info email link', err));}}>   
                       <View style = {{width:20,height:20,borderRadius:10,borderWidth:1,borderColor:'gray',alignItems:'center',justifyContent:'center'}}> 
                       <Icon name = 'envelope-square' 
                       style = {{ 
                       color:'gray',
                      fontSize:18
                       }}/>
                       </View>
                      <Text style = {{color:'blue',textDecorationLine:'underline'}}> {'contactus@vodafone.com'} </Text>         
                    </TouchableOpacity>

                     <TouchableOpacity
                       style = {{  
                       flexDirection:'row',
                       height:50,   
                       width:Dimensions.get('window').width-40,
                       marginTop:20,
                       alignItems:'center',
                       justifyContent:'space-between',
                       borderWidth : 1,
                        borderRadius : 2,
                        borderColor : '#ddd',
                        shadowColor : '#000',
                        shadowOffset : {width : 0 , height : 2},
                        shadowOpacity : 0.1,
                        shadowRadius : 1,
                        elevation : 1,
                        marginLeft : 5,   
                      }} 
                         >   
                       <Text style = {{fontSize:16,marginLeft:18}}> {'Terms and Polices'} </Text>         
                       <Icon name = 'book' 
                         style = {{ 
                          color:'gray', 
                          fontSize : 30,
                          marginRight:20
                       }}/>
                    </TouchableOpacity>


             </View>   
        );
    }
}

const styles = {
   
     SocialMediaButton : {    
        flexDirection:'row',
       justifyContent: 'center',   
       alignItems:'center',
       backgroundColor : '#0C6656',
       width : 40,
       height : 30,
       marginLeft:20,
       elevation : 1,
       borderRadius:5
    },
    SocialMediaText : {
            marginLeft:5,
            color:'white'

    },
    SocialMediaIcon : {
            color:'white',
            fontSize:20

    },
}

export default About; 