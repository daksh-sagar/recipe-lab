import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <RecipeList />
      </div>
    );
  }
}

export default App;
