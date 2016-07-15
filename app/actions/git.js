import Git from 'git-wrapper2-promise';
import statusParser from '../parser/status';

export const REQUEST_STATUS = 'REQUEST_STATUS';
export const RECEIVE_STATUS = 'RECEIVE_STATUS';

function requestStatus () {
  return {
    type: REQUEST_STATUS
  };
}

function receiveStatus (statuses) {
  return {
    type: RECEIVE_STATUS,
    statuses,
    receivedAt: Date.now()
  };
}

export function getStatus () {
  let git = new Git();

  return dispatch => {
    dispatch(requestStatus());
    return git.exec('status', '--porcelain')
      .then(response => statusParser(response.stdout.toString()))
      .then(status => dispatch(receiveStatus(status)));
  };
}
