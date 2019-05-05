import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../App.css';

const UserItem = ({ user: { id, username, name, country, city, url } }) => {
  console.log(id, username);
  return (
    <div className="profile bg-light">
      <div>
        <strong>{username}</strong>
        <div>{name}</div>
      </div>
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
