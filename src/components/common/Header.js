import React, { Component } from 'react';
import {Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {UpdateAppState} from '../../actions';
import  Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import colorCodes from '../../themes/mainStyle';





class Header extends Component {

    handlepress(){
        if(this.props.isMenu)
        {
            this.props.UpdateAppState({prop:'AppDrawerVisible',value:!this.props.AppDrawerVisible});
        }
        else{
            Actions.pop();
        }
    
    }

    render(){
        
        return (
           <View style = { styles.HeaderStyle } >
                        <View style = {{flex:1, justifyContent:'flex-start'}}>       
                         <TouchableOpacity 
                           onPress = {this.handlepress.bind(this)}
                         >
                            <Icon name={this.props.isMenu?"bars":'chevron-left'} size = {30} color = 'white'  style = {{marginLeft:5}}/>  
                         </TouchableOpacity>

                         </View>

                        <View>
                        <Text  style = {{alignSelf: 'center',justifyContent:'center',color: 'white', fontSize: 25 }}>{this.props.headerText}</Text> 
                        </View>


                        <View style = {{flex:1}}>

                        </View>

          </View>
        );
    }
}




const styles = StyleSheet.create({
 HeaderStyle : {
       alignItems : 'center',
       flexDirection : 'row',
       backgroundColor: colorCodes.vodared,
       width :Dimensions.get('window').width ,
       height : Dimensions.get('window').width*0.13,
      }

});

const mapStateToProps = state => {
       return  {
        AppDrawerVisible : state.AppState.AppDrawerVisible
    };  
};


export default connect (mapStateToProps,
    {UpdateAppState}  
)(Header);  


