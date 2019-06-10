import React from 'react';
import Content from '../../../src/components/Content';
import renderer from 'react-test-renderer';

test('Content renders without errors', () => {
  const component = renderer.create(
    <Content
      text="Sample Content"
      color="red"
      opacity="1"
      className="sample-class"
      isFetching={false}
    />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Content renders as a link and class name is set during fetching', () => {
  const component = renderer.create(
    <Content
      text="Sample Content"
      color="red"
      opacity="1"
      className="sample-class"
      isFetching={true}
      type="link"
    />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});