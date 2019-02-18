import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import Search from './components/Search';
import { recipes } from './tempList';

class App extends Component {
  state = {
    recipes: recipes,
    url:
      'https://www.food2fork.com/api/search?key=6b77e779247b0c123f91fc9370b24d3b&q=shredded%20chicken',
    recipe_id: null,
    displayList: true
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
  }

  handleDetailsClick = recipe_id => {
    this.setState({
      ...this.state,
      displayList: false,
      recipe_id
    });
  };

  handleBackToRecipesClick = () => {
    this.setState({
      ...this.state,
      displayList: true
    });
  };

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
        <Search />
        {this.renderListOrDetail(this.state.displayList)}
      </div>
    );
  }
}

export default App;
