import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/containers/ErrorBoundary.scss';
import Button from '../components/Button';
import colors from '../styles/colors';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasErrors: true });
  }

  refresh() {
    location.reload();
  }

  render() {
    if (this.state.hasErrors) {
      return (
        <div className="error-boundary">
          Oops... something went wrong. Please try again later.
          <Button
            className="error-bundary-refresh-btn"
            text="Refresh"
            color={colors.blue}
            onClick={this.refresh}
          />
        </div>
      );
    }
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);