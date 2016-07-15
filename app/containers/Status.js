import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getStatus } from '../actions/git';
import List from '../components/status/List';

class StatusContainer extends Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(getStatus());
  }

  render () {
    const { statuses, isFetching, lastUpdated } = this.props;

    return (
      <section id='status'>
        <h1>Status</h1> (last updated: {moment(lastUpdated).format('dddd, MMMM Do YYYY, h:mm:ss a')})

        {isFetching && statuses.length === 0 &&
          <p>Loading...</p>
        }
        {!isFetching && statuses.length === 0 &&
          <p>Empty.</p>
        }
        {statuses.length > 0 &&
          <List statuses={statuses} />
        }
      </section>
    );
  }
}

StatusContainer.propTypes = {
  statuses: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number
};

function mapStateToProps (state) {
  return {
    statuses: state.status.items,
    isFetching: state.status.isFetching,
    lastUpdated: state.status.lastUpdated
  };
}

export default connect(mapStateToProps)(StatusContainer);
