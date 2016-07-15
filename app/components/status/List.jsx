import React, { PropTypes, Component } from 'react';

export default class List extends Component {
  render () {
    return (
      <ul>
        {this.props.statuses.map((status, i) =>
          <li key={i}>{status.filename} - {status.state}</li>
        )}
      </ul>
    );
  }
}

List.propTypes = {
  statuses: PropTypes.array.isRequired
};
