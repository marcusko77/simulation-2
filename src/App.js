import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {routes}
      </div>
    );
  }
}

export default App;
