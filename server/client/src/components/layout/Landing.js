import React, { Component } from 'react';

export default class Landing extends Component {
  render() {
    return (
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large samaFont">Sama</h1>
            <p className="lead">Consult users, messages, and media</p>
          </div>
        </div>
      </section>
    );
  }
}
