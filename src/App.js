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
    recipe_id: 35386
  };

  // getRecipes = async () => {
  //   const data = await fetch(this.state.url);
  //   const jsonData = await data.json();

  //   this.setState({
  //     recipes: jsonData.recipes
  //   });
  // };

  // componentDidMount() {
  //   this.getRecipes();
  // }

  render() {
    return (
      <div className="App">
        <Search />
        {/* <RecipeList recipes={this.state.recipes} /> */}
        <RecipeDetails id={this.state.recipe_id} />
      </div>
    );
  }
}

export default App;
