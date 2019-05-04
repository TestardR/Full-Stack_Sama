import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import { getUsers } from '../../actions/userActions';

const Users = ({ getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return <div />;
};

Users.propTypes = {
  getUsers: PropTypes.func.isRequired
};

export default connect(
  null,
  { getUsers }
)(Users);
