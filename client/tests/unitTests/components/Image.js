import React from 'react';
import Image from '../../../src/components/Image';
import renderer from 'react-test-renderer';

test('Image renders without errors', () => {
  const component = renderer.create(
    <Image
      src="someurl"
      width="300px"
      height="300px"
      className="custom-class"
      isFetching={true}
    />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});