import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';

export default function configureStore (initialState) {
  const logger = createLogger({level: 'info', collapsed: true});
  const enhancer = compose(applyMiddleware(thunk, logger), window.devToolsExtension ? window.devToolsExtension() : noop => noop);

  return createStore(reducers, initialState, enhancer);
}
