import React from 'react';
import Button from '../../../src/components/Button';
import renderer from 'react-test-renderer';

test('Button renders without errors', () => {
  const component = renderer.create(
    <Button
      text="Sample Button"
      onClick={() => { alert('hello') }}
      borderColor="red"
      color="blue"
    />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});