import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { UpdateAppState } from '../actions';
import Modal from "react-native-modal";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import colorCodes from '../themes/mainStyle';


class Drawer extends Component {


    constructor() {
        super();
        this.state = {
            isReady: true
        };
    }

    toggleDrawer() {
        this.props.UpdateAppState({ prop: 'AppDrawerVisible', value: !this.props.AppDrawerVisible });
    }

    render() {
        return (
            <Modal style={{ margin: 0 }}
                animationIn='slideInLeft'
                animationOut='slideOutLeft'
                animationInTiming={300}
                animationOutTiming={200}
                onDismiss={this.toggleDrawer.bind()}
                isVisible={this.props.AppDrawerVisible}
                onBackButtonPress={this.toggleDrawer.bind(this)}
                onBackdropPress={this.toggleDrawer.bind(this)}

            >

                <View style={{ flex: 1, height: undefined, width: '80%', backgroundColor: '#F1F5F3' }}>

                    <View style={{ height: '30%' }}>
                        <ImageBackground
                            resizeMode='stretch'
                            source={{ uri: 'https://www.menosfios.com/wp-content/uploads/2017/04/0180_OpenGraph_Homepage.png' }}
                            style={{ flex: 1, width: undefined, justifyContent: 'flex-end',flexDirection:'row',alignItems:'flex-end'}}

                        >
                            <View style={{marginRight:20, marginBottom:20, alignItems: 'center', marginBottom: 10, justifyContent: 'space-around' }}> 
                                <Image style= {styles.thumbnail}
                                    source={{ uri: this.props.photoUrl }} 
                                    />
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, color: 'gray' }}>
                                        {this.props.username}
                                    </Text>

                                    <Text style={{ fontSize: 14, color: 'gray' }}>
                                        {this.props.email}
                                    </Text>
                                </View>

                            </View>
                        </ImageBackground>
                    </View>

                    <View >

                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />
                        
                        <TouchableOpacity style={styles.ListItemStyle}
                            onPress={() => {
                                this.toggleDrawer()
                                // Actions.Main();
                            }}	  >
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={styles.Iconstyle} name='home' />
                                <Text style={styles.ListItemfontStyle}> {'Home'}</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />

                        <TouchableOpacity  style={styles.ListItemStyle}
                            onPress={() => {
                                this.toggleDrawer()
                            }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={styles.Iconstyle} name='shopping-basket' />
                                <Text style={styles.ListItemfontStyle}> {'My Basket'}</Text>
                            </View>
                        </TouchableOpacity>


                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />





                        <TouchableOpacity  style={styles.ListItemStyle}
                            onPress={() => {
                                this.toggleDrawer()
                            }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={styles.Iconstyle} name='cog' />
                                <Text style={styles.ListItemfontStyle}> {'Settings'}</Text>   
                            </View>
                        </TouchableOpacity>


                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />


                        <TouchableOpacity  style={styles.ListItemStyle}
                            onPress={() => {
                                this.toggleDrawer()
                                Actions.About({damageType:'brain'});
                            }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={styles.Iconstyle} name='info-circle' />
                                <Text style={styles.ListItemfontStyle}> {'About Vodammerce'}</Text>
                            </View>
                        </TouchableOpacity>


                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />

                        <TouchableOpacity style={styles.ListItemStyle}
                            onPress={() => {
                                this.toggleDrawer()
                            }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={styles.Iconstyle} name='envelope-open' />
                                <Text style={styles.ListItemfontStyle}> {'Send your notes'}</Text>
                            </View>
                        </TouchableOpacity>



                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />

                        <TouchableOpacity style={styles.ListItemStyle}
                            onPress={() => {
                                this.toggleDrawer()
                                Actions.popTo("Login");  
                            }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={styles.Iconstyle} name='sign-out' />
                                <Text style={styles.ListItemfontStyle}> {'Logout'}</Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                </View>
            </Modal>
        )

    }
}


const mapStateToProps = state => {
    const { email, username, photoUrl } = state.UserInfo;
    const { AppDrawerVisible } = state.AppState;
    return { AppDrawerVisible, email, username, photoUrl };
};


const styles = StyleSheet.create({
    Iconstyle: {
        color: colorCodes.vodared,
        fontSize:30
    },
    ListItemfontStyle: {
        fontSize: 20,
        color: 'gray',
        marginLeft: 20
    }, ListItemStyle: {
        marginLeft:20,
       flexDirection:'row',
       alignItems:'center',
        //justifyContent:'center', 
       height:50
    },
    thumbnail:{
        width:70,
        height:70,
        borderRadius:35,   
        marginLeft: 10 
    }

});

export default connect(mapStateToProps,
    { UpdateAppState }
)(Drawer);  