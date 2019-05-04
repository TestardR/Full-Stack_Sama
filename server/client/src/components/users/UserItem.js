import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { id, username, name, country, city } }) => {
  console.log(id, username, country, city);
  return (
    <div className="profile bg-light">
      <span>
        <strong>{username}</strong>
        <div>{name}</div>
      </span>
      <p className="my-1">
        {country}
        <br />
        {city}
      </p>
      <Link to={`/users/${id}`} className="btn btn-primary">
        <i className="fa fa-universal-access" /> View User
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
