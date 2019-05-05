import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import UserMedia from './UserMedia';
import { getUser } from '../../actions/userActions';
import UserContent from './UserContent';

const User = ({ getUser, user: { user, loading }, match }) => {
  useEffect(() => {
    getUser(match.params.id);
  }, [getUser, match.params.id]);
  return (
    <Fragment>
      {user == null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="large text-primary">Media</div>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> See all the posted pictures
          </p>
          <Link to="/users" className="btn btn-light">
            Back To Users
          </Link>
          <div className="profile-grid my-1">
            <UserMedia user={user} />
          </div>
          <div className="large text-primary">Content</div>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> See all the posted messages
          </p>
          <Link to="/users" className="btn btn-light">
            Back To Users
          </Link>
          <div className="profile-grid my-1">
            <UserContent user={user} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToPros = state => ({
  user: state.user
});

export default connect(
  mapStateToPros,
  { getUser }
)(User);
