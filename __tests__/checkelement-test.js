import 'react-native';
import React from 'react';
import TextInputWithIcon from '../src/components/common/TextInputWithIcon';

import renderer from 'react-test-renderer';



let findElement = function (tree, element) {
  console.warn(tree.children);
  let result = undefined;
  for(node in tree.children)
  {
    if(tree.children[node].props.testID == element)
    result = true

  }
  return result;
}


it('find an element ', () => {

  let tree = renderer.create(
    <TextInputWithIcon />
  ).toJSON();

  expect(findElement(tree, 'userInput2')).toBeDefined();
})