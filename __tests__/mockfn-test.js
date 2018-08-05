import 'react-native';
import React from 'react';
import TextInputWithIcon from '../src/components/common/TextInputWithIcon';
import Users from '../src/Users';
import  'isomorphic-fetch';
import renderer from 'react-test-renderer';


it('API Test Case', async () => {

  // global.fetch = jest.fn().mockImplementation(() => {
  //   var p = new Promise((resolve, reject) => {
  //     resolve({
  //       json: function () {
  //         return { id: 2 }
  //       }
  //     })
  //   })
  //   return p;
  // })

  

 const response = await Users.all();
 
 console.warn(response);

  expect(response.id).toBe({
    "title": "The Basics - Networking",
    "description": "Your app fetched this from a remote endpoint!",
    "movies": [
      {
        "id": "1",
        "title": "Star Wars",
        "releaseYear": "1977"
      },
      {
        "id": "2",
        "title": "Back to the Future",
        "releaseYear": "1985"
      },
      {
        "id": "3",
        "title": "The Matrix",
        "releaseYear": "1999"
      },
      {
        "id": "4",
        "title": "Inception",
        "releaseYear": "2010"
      },
      {
        "id": "5",
        "title": "Interstellar",
        "releaseYear": "2014"
      }
    ]
  });
})