import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions';

const User = ({ getUser, user }) => {
  useEffect(() => {
    getUser();
  }, [getUser]);
  return <div>Test</div>;
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
