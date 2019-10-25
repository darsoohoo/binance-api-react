import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import Landing from './components/Landing';
import DigitalAssets from './components/DigitalAssets';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={Landing} />
         </main>
      </div>
    );
  }
}

export default App;
