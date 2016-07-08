export default (state = [], action) => {
  switch (action.type) {
    case 'ALERT_SOMETHING':
      alert('it\'s something');
      return state;
    default:
      return state;
  }
};
