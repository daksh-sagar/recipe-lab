import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import Search from './components/Search';
// import { recipes } from './tempList';

class App extends Component {
  state = {
    recipes: null,
    url: `https://www.food2fork.com/api/search?key=${
      process.env.FOOD2FORK_API_KEY
    }`, //8141dc5a9c04ad0ca2de49feaf9e03a3
    recipe_id: null,
    displayList: true,
    searchText: '',
    base_url: `https://www.food2fork.com/api/search?key=${
      process.env.FOOD2FORK_API_KEY
    }`
  };

  getRecipes = async () => {
    const data = await fetch(this.state.url);
    const jsonData = await data.json();

    this.setState({
      recipes: jsonData.recipes
    });
  };

  componentDidMount() {
    this.getRecipes();
    // console.log('called cdm');
  }

  handleDetailsClick = recipe_id => {
    this.setState({
      // ...this.state,
      displayList: false,
      recipe_id
    });
  };

  handleBackToRecipesClick = () => {
    this.setState({
      // ...this.state,
      displayList: true
    });
  };

  handleChange = event => {
    // console.log(event.target.value);
    this.setState({
      searchText: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log('submitted');
    this.setState(
      {
        url: `${this.state.base_url}&q=${this.state.searchText}`
      },
      () => {
        this.getRecipes();
      }
    );
  };

  // Handles which component to render, the RecipesList or the RecipeDetail
  renderListOrDetail = displayList => {
    if (displayList) {
      return (
        <RecipeList
          recipes={this.state.recipes}
          onDetailsClick={this.handleDetailsClick}
        />
      );
    } else {
      return (
        <RecipeDetails
          id={this.state.recipe_id}
          onBackToRecipesClick={this.handleBackToRecipesClick}
        />
      );
    }
  };

  render() {
    return (
      <div className="App">
        <Search
          value={this.state.searchText}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        {this.renderListOrDetail(this.state.displayList)}
      </div>
    );
  }
}

export default App;
