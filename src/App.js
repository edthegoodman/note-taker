import React, { Component } from 'react';
import Comments from './Components/Comments';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Let's start taking notes!
        <Comments>This is the first text</Comments>
        <Comments>This is the second text</Comments>
        <Comments>This is the third text</Comments>
      </div>
    );
  }
}

export default App;
