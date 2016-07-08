import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore (initialState) {
  const enhancer = compose(applyMiddleware(thunk));

  return createStore(reducers, initialState, enhancer);
}
