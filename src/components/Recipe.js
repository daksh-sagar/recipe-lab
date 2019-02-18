import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;
    return (
      <>
        <div className="card">
          <img src={image_url} alt="" className="card-img-top" />
          <div className="card-body text-capitalize">
            <h3 className="card-title ">{title}</h3>
            <h4 className="cursive-text text-primary">
              provided by {publisher}
            </h4>
          </div>
          <div className="card-footer d-flex justify-content-around">
            <button className="btn btn-outline-primary">Details</button>
            <a
              href={source_url}
              className="btn btn-outline-success"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Page
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Recipe;
