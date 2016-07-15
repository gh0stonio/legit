import { REQUEST_STATUS, RECEIVE_STATUS } from '../actions/git';

const defaultState = {
  isFetching: false,
  items: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_STATUS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_STATUS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.statuses,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};
