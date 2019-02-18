import React, { Component } from 'react';
import Recipe from './Recipe';
import { recipes } from '../tempList';

class RecipeList extends Component {
  state = {
    recipes: recipes,
    url:
      'https://www.food2fork.com/api/search?key=6b77e779247b0c123f91fc9370b24d3b&q=shredded%20chicken'
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
    const { recipes } = this.state;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-uppercase text-center">
              <h1 className="cursive-text display-4">Recipe List</h1>
            </div>
          </div>
          <div className="row">
            {recipes.map(recipe => {
              return (
                <div
                  className="col-10 mx-auto col-md-6 col-lg-4 my-3 "
                  key={recipe.recipe_id}
                >
                  <Recipe recipe={recipe} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default RecipeList;
