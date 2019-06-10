import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader'
import Home from './routes/Home';
import Details from './routes/Details';
import store from './redux/store';
import settings from './helpers/settings';
import './styles/App.scss';
import Logo from './images/Logo';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={settings.basename}>
          <div>
            <div className="top-bar">
              <div className="logo"><Logo /><span>Cats & <span>Dogs</span></span></div>
            </div>
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/gif/details/:id" render={({ match }) => (
              <Details gifId={match.params.id}/>
            )}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(App);
