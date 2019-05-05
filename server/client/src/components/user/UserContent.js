import React, { Component } from 'react';
import '../../App.css';
import newId from '../../utils/newid';

export default class UserContent extends Component {
  componentWillMount() {
    this.id = newId();
  }

  renderContent() {
    const { user } = this.props;
    return user.map(e => {
      return (
        <div key={this.id} className="userContent bg-light">
          {e.content}
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
