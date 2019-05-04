import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import UserItem from '../users/UserItem';
import { getUsers } from '../../actions/userActions';

const Users = ({ getUsers, user: { users, loading } }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="large text-primary">Users</div>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> Browse and find users
          </p>
          <div className="profiles">
            {users == null ? (
              <h4>Loading...</h4>
            ) : (
              users.map(user => <UserItem key={user.id} user={user} />)
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
