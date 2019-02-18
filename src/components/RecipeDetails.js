import React, { Component } from 'react';
import { recipe } from '../tempDetails';

class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: recipe,
      url: `https://www.food2fork.com/api/get?key=6b77e779247b0c123f91fc9370b24d3b&rId=${
        this.props.id
      }`
    };
  }

  async componentDidMount() {
    const data = await fetch(this.state.url);
    const jsonData = await data.json();

    this.setState({
      recipe: jsonData.recipe
    });
  }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      title,
      ingredients,
      source_url
    } = this.state.recipe;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button className="btn btn-outline-warning mb-5 text-capitalize">
                back to recipe list
              </button>
              <img src={image_url} alt="" className="d-block w-100" />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h3 className="text-uppercase my-3">{title}</h3>
              <h4 className="cursive-text text-primary my-3">
                provided by {publisher}
              </h4>
              <div className="d-flex justify-content-around mt-3">
                <a
                  href={source_url}
                  className="btn btn-outline-success"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Page
                </a>
                <a
                  href={publisher_url}
                  className="btn btn-outline-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Publisher's Page
                </a>
              </div>
              <ul className="list-group mt-3">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {ingredients.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item text-slanted">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RecipeDetails;
