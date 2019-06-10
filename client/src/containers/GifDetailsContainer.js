import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import Image from '../components/Image';
import Heading from '../components/Heading';
import Content from '../components/Content';
import Button from '../components/Button';
import colors from '../styles/colors';
import CalendarIcon from '../images/CalendarIcon';
import '../styles/containers/GifDetailsContainer.scss';

class GifDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props && this.props.history && this.props.history.goBack();
  }

  renderGifDetails() {
    const {
      isFetching,
      gifDetails
    } = this.props;

    const animatedDate = isFetching ? 'animated-date-placeholder' : '';

    return (
      <div>
        <Image
          src={gifDetails.images && gifDetails.images.fixed_width && gifDetails.images.fixed_width.url}
          className="gif-image"
          width="300px"
          height="250px"
          isFetching={isFetching}
        />
        <div>
          <Heading
            text={gifDetails.title || ''}
            color={colors.black}
            isFetching={isFetching}
          />
          <Content
            type="link"
            text={gifDetails.source || ''}
            className="gif-details-content"
            isFetching={isFetching}
          />
          <div className={`upload-date ${animatedDate}`}>
            <b><CalendarIcon />Upload date: </b> {gifDetails.import_datetime || ''}
          </div>

          <Button
            text="Go back"
            borderColor={colors.blue}
            color={colors.blue}
            className="go-back-btn"
            isFetching={isFetching}
            onClick={this.goBack}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="details-cover"></div>
        <div className="gif-details">
          {this.renderGifDetails()}
        </div>
      </div>
    );
  }
}

GifDetailsContainer.propTypes = {
  history: PropTypes.shape({}).isRequired,
  gifDetails: PropTypes.shape({}),
  isFetching: PropTypes.bool,
};

export default withRouter(GifDetailsContainer);