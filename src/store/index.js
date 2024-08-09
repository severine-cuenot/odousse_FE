/* eslint-disable no-underscore-dangle */
import { createStore, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers();

const store = createStore(enhancers);

export default store;
