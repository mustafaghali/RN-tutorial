
import React, { Component } from 'react';
import {
    View,
    TextInput,
    Dimensions

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default textwithIcon = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Icon size={25} name={props.iconName} color={props.iconColor} />
            <TextInput
                testID={'userInput'}
                value={props.textValue}
                onChangeText={props.onTextChanged}
                underlineColorAndroid="white"
                style={{
                    width: Dimensions.get('window').width * 2 / 3,
                    height: 50,
                    color: 'white',
                    textAlign: 'center'
                }}
                placeholderTextColor='white'
                placeholder={props.placeholder}
            />
        </View>

        // borderColor:'white',
        // borderWidth:1,
        // borderRadius:20
    );
}
