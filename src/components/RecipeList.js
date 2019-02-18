import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeList extends Component {
  render() {
    const { recipes, onDetailsClick } = this.props;
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
                  <Recipe recipe={recipe} onDetailsClick={onDetailsClick} />
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
