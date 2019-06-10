import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import GifsListContainer from '../containers/GifsListContainer';
import ErrorBoundary from '../containers/ErrorBoundary';
import config from '../helpers/settings';
import colors from '../styles/colors';
import '../styles/routes/Home.scss';
import Button from '../components/Button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleFetchGifs = this.handleFetchGifs.bind(this);
    this.fetchMoreGifs = this.fetchMoreGifs.bind(this);
    this.handleFilter = this.handleFilter.bind(this);

    const { gifs } = props;

    if (!gifs || (gifs && !Object.keys(gifs).length)) {
      this.handleFetchGifs(config.defaultKeyword, 1);
    }
  }

  /**
   * Load more gifs from API
   */
  fetchMoreGifs() {
    const { gifsType, currentPage, isFetching } = this.props;
    this.handleFetchGifs(gifsType, currentPage[gifsType]+1);
  }

  /**
   * Fetch gifs from API
   */
  handleFetchGifs(keyword, page) {
    const { fetchGifs } = this.props;
    if (fetchGifs && keyword && page) {
      fetchGifs(keyword, page);
    }
  }

  /**
   * If there are no results on Redux Store, than call the API,
   * otherwise, load from the store
   */
  handleFilter(keyword) {
    const { gifs, setGifsType } = this.props;
    if (!gifs[keyword] || (gifs[keyword] && !Object.keys(gifs[keyword]).length)) {
      this.handleFetchGifs(keyword, 1);
    } else {
      setGifsType(keyword);
    }
  }

  render() {
    const {
      isFetching,
      gifs,
      gifsType
    } = this.props;

    return (
      <div className="home-container">
        <div className="gifs-list-wrapper">
          <ErrorBoundary>
            <div className="gifs-filter">
              <Button
                text="Cats"
                borderColor={gifsType === 'cat' ? colors.white : 'transparent'}
                color={colors.white}
                isFetching={isFetching}
                onClick={() => this.handleFilter('cat')}
                type="secondary"
              />
              <Button
                text="Dogs"
                borderColor={gifsType === 'dog' ? colors.white : 'transparent'}
                color={colors.white}
                isFetching={isFetching}
                onClick={() => this.handleFilter('dog')}
                type="secondary"
              />
            </div>
            <GifsListContainer
              gifs={gifs}
              keyword={gifsType}
              isFetching={isFetching}
            />
            <div className="pagination">
              <Button
                text="Load more"
                borderColor={colors.white}
                color={colors.white}
                className="load-more-btn"
                isFetching={isFetching}
                onClick={this.fetchMoreGifs}
              />
            </div>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

const mapStateToProps = (state) => {
  return {
    gifs: state.gifs,
    isFetching: state.isFetching,
    currentPage: state.currentPage,
    gifsType: state.gifsType,
  };
}

Home.propTypes = {
  keyword: PropTypes.string,
  gifs: PropTypes.shape({}),
  fetchGifs: PropTypes.func,
  isFetching: PropTypes.bool,
  currentPage: PropTypes.shape({}),
  gifsType: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home)); 