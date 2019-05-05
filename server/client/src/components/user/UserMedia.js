import React, { Component } from 'react';
import '../../App.css';
import newId from '../../utils/newid';

class UserTop extends Component {
  componentWillMount() {
    this.id = newId();
  }

  renderMedia() {
    const { user } = this.props;
    return user.map(e => {
      return <img key={this.id} src={e.url} className="userMedia" />;
    });
  }

  render() {
    return (
      <div className="bg-light profile-top img userMediaTemplate">
        {this.renderMedia()}
      </div>
    );
  }
}

export default UserTop;
