import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import '../styles/components/Heading.scss';
import colors from '../styles/colors';

export default class Heading extends PureComponent {
  render() {
    const {
      text,
      color,
      isFetching
    } = this.props;
    const fetchingClass = isFetching ? 'animated-heading-placeholder' : '';

    return (
      <h1
        className={`heading ${fetchingClass}`}
        style={{color}}
      >
        {this.props.text}
      </h1>
    );
  }
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  isFetching: PropTypes.bool
};