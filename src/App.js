import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import { Normalize } from 'styled-normalize'

class App extends Component {
  render() {
    return (
      <div>
        <Normalize />
        <SearchBar />
      </div>
    );
  }
}

export default App;
