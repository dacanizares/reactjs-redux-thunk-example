import React from 'react'
import renderer from 'react-test-renderer'
import User from './User'

it('renders correctly', () => {
  const tree = renderer
    .create(<User name='Title' email='my@email.com' avatarUrl='ImageUrl' />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
