import 'react-native';
import React from 'react';
import Login from '../src/components/Login';

import renderer from 'react-test-renderer';

it('function and state test', () => {



  let LoginData = renderer.create(
    <Login />
    ).getInstance();


    console.log(LoginData);

    LoginData.changeValue(13);
    
    expect(LoginData.state.testInt).toEqual(11);
  //   .toJSON();
  // expect(tree).toMatchSnapshot();
});