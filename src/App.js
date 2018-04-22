import React, { Component } from 'react';
import './App.css';

import Header from './components/Header.js'
import Countdown from './components/Countdown.js'

class App extends Component {
  render() {
    return (
      <div className='body'>
        <Header />
        <Countdown/>
      </div>
    );
  }
}

export default App;
