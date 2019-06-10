import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Image from '../components/Image';
import Heading from '../components/Heading';
import Content from '../components/Content';
import Button from '../components/Button';
import '../styles/containers/GifsListContainer.scss';
import colors from '../styles/colors';

const imageWidth = '250px';
const imageHeight = '200px';

export default class GifsListContainer extends Component {
  constructor(props) {
    super(props);
    this.renderGifs = this.renderGifs.bind(this);
  }

  renderPlaceholders() {
    const placeholders = [{}, {}, {}, {}];
    return placeholders.map((placeholder, key) => {
      return (
        <div
          className="gifs-list-container"
          key={`placeholder-${key}`}
        >
          <Image
            src=""
            className="gif-image"
            width={imageWidth}
            height={imageHeight}
            isFetching={true}
          />
        </div>
      );
    });
  }

  renderNoResultsFound() {
    return (
      <div className="error-boundary">
        No results found
      </div>
    );
  }

  renderGifs() {
    const {
      gifs,
      keyword,
      isFetching
    } = this.props;
    const gifsList = gifs[keyword];

    if (isFetching && (!gifs || gifs && !Object.keys(gifs).length)) {
      return this.renderPlaceholders();
    }

    if (!isFetching && (!gifsList || gifsList && !Object.keys(gifsList).length)) {
      return this.renderNoResultsFound();
    }

    return gifsList.map((gif, key) => {
      return (
        <div
          className="gifs-list-container"
          key={`${gif.slug}-${key}`}
        >
          <RouterLink
            to={`/gif/details/${gif.id}`}
            className="link"
          >
            <Image
              src={gif.images && gif.images.fixed_width && gif.images.fixed_width.url || ''}
              className="gif-image"
              width={imageWidth}
              height={imageHeight}
              isFetching={isFetching}
            />
            <div
              className="gif-details-overlay"
              style={{width: imageWidth}}
            >
              <div>{gif.title || ''}</div>
            </div>
          </RouterLink>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderGifs()}</div>;
  }
}

GifsListContainer.propTypes = {
  keyword: PropTypes.string,
  gifs: PropTypes.shape({}),
  isFetching: PropTypes.bool,
};