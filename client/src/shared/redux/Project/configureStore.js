import {
  createStore,
  applyMiddleware,
  compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import reducers from './reducers';

//TODO: remove logger for only production mode

const configureStore = ({user, slug}, init) => {
  const middleware = [thunkMiddleware, loggerMiddleware];
  const enhancer = compose(
    applyMiddleware(...middleware)
  );
  const store = createStore(
    reducers,
    {user: user, slug: slug},
    enhancer
  );
  return store;
}

export default configureStore;
