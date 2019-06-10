import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import '../styles/components/Content.scss';
import colors from '../styles/colors';

export default class Content extends PureComponent {
  render() {
    const {
      text,
      color,
      opacity,
      className,
      isFetching,
      type,
    } = this.props;
    const customClassName = className || '';
    const fetchingClass = isFetching ? 'animated-content-placeholder' : '';

    return (
      <div
        className={`content ${customClassName} ${fetchingClass}`}
        style={{color, opacity}}
      >
        {type === 'link' ?
        (
          <a
            href={text}
            target="_blank"
          >
            {text}
          </a>
        ) : text}
      </div>
    );
  }
}

Content.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  opacity: PropTypes.string,
  className: PropTypes.string,
  isFetching: PropTypes.bool,
  type: PropTypes.string,
};
