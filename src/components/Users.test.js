import React from 'react'
import Users from './Users'
import renderer from 'react-test-renderer'

jest.mock('./User', () => 'User');

it('renders correctly', () => {
  const fecth = () => { }

  const userList = [{
    email: 'email@test.com', 
    name: {
      title: 'mr',
      first: 'name'
    },
    picture: {
      large: 'image here'
    },
    id: {
      value: 'uniquevalue'
    }
  }];

  const tree = renderer
    .create(<Users usersData={userList} fetchData={fecth} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('fails when no wrong type of data was given', () => {
  expect(() => renderer
  .create(<Users usersData={{}} />)).toThrowError();
});