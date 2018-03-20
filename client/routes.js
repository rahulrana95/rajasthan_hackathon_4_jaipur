import React from 'react';
import store  from './store.js';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import App from './components/App';
import TrendingPlaces from './components/TrendingPlaces/TrendingPlaces';
import CityProfile from './components/TrendingPlaces/CityProfile';
import CityGuide from './components/CityGuide/CityGuide';

import { createStore, combineReducers } from 'redux';

let RouterConfig = () =>
<Provider store={store}>
  <Router history={browserHistory}  >
    <Route path="/" component={App}>
      <Route path="/trendingPlaces" component={TrendingPlaces}>
      </Route>
      <Route path="/trendingPlaces/:id" component={CityProfile}></Route>
        <Route path="/cityGuide" component={CityGuide}></Route>
    </Route>
  </Router>
</Provider>

export default RouterConfig;
