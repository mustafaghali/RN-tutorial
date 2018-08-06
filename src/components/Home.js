import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './common/Header';
import Drawer from './Drawer';



class Home extends Component {

    render() {
        return (
            <View>
                <Drawer/>
                <Header headerText = {'Home'} isMenu/>      
                <Text>it works</Text>
            </View>
        )
    }
}

export default Home;