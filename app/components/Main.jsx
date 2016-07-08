import React, { PropTypes } from 'react';

const Main = ({ onClick }) => (
  <div onClick={onClick}>
    incoming (click on me)
  </div>
);

Main.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Main;
