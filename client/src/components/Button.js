import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import '../styles/components/Button.scss';
import colors from '../styles/colors';

export default class Button extends PureComponent {
  render() {
    const {
      text,
      color,
      borderColor,
      type,
      className,
      isFetching,
      onClick,
    } = this.props;
    const buttonType = type || 'primary';
    const customClassName = className || '';
    const fetchingClass = isFetching ? 'animated-button-placeholder' : '';

    return (
      <button
        className={`button ${buttonType}-button ${customClassName} ${fetchingClass}`}
        style={{borderColor, color}}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  borderColor: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  isFetching: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};
