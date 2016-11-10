import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';
import HomeNav from './HomeNav';
import HomeBody from './HomeBody';
import HomeFooter from './HomeFooter';



class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeNav/>
        <HomeBody/>
        <HomeFooter/>
      </div>
    );
  }
}

export default App;
