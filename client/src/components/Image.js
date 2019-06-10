import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../styles/colors';
import '../styles/components/Image.scss';

export default class Image extends PureComponent {
  render() {
    const {
      src,
      className,
      width,
      height,
      isFetching,
    } = this.props;

    if (isFetching) {
      return (
        <div
          className="animated-image-placeholder"
          style={{maxWidth: width, minWidth: width, height}}
        ></div>
      );
    }

    return (
      <img
        src={src}
        className={className}
        style={{width, height}}
      />
    );
  }
}

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  isFetching: PropTypes.bool
};