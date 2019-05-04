import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <Landing />
      </Fragment>
    </Provider>
  );
};

export default App;
