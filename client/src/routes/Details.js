import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import '../styles/routes/Details.scss';
import GifDetailsContainer from '../containers/GifDetailsContainer';
import ErrorBoundary from '../containers/ErrorBoundary';

class Details extends Component {
  constructor(props) {
    super(props);
    this.handleFetchGifDetails = this.handleFetchGifDetails.bind(this);

    const { gifId, gifDetails, findGifDetailsFromStore } = props;
    findGifDetailsFromStore(gifId);
  }

  componentWillMount() {
    const { gifDetails, gifId } = this.props;

    // If gif details are not already in Redux Store than fetch from API
    if (!gifDetails || (gifDetails && !Object.keys(gifDetails).length)) {
      this.handleFetchGifDetails(gifId);
    }
  }

  /**
   * Fetch gif details from API
   */
  handleFetchGifDetails(gifId) {
    if (gifId) {
      this.props.fetchGifDetails(gifId);
    }
  }

  render() {
    const {
      isFetching,
      gifDetails
    } = this.props;

    return (
      <div className="details-container">
        <ErrorBoundary>
          <GifDetailsContainer
            gifDetails={gifDetails}
            isFetching={isFetching}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = (state) => {
  return {
    gifDetails: state.gifDetails,
    gifs: state.gifs,
    gifsType: state.gifsType,
    isFetching: state.isFetching
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details); 