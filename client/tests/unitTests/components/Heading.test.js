import React from 'react';
import Heading from '../../../src/components/Heading';
import renderer from 'react-test-renderer';

test('Heading renders without errors', () => {
  const component = renderer.create(
    <Heading
      text="Sample Heading"
      color="red"
      isFetching={true}
    />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
