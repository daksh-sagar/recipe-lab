import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="cursive-text text-capitalize">
                Search for, the Recipe{' '}
                <span className="text-danger">on your mind</span>
              </h1>
              <form className="my-5">
                <label htmlFor="search" className="text-capitalize">
                  recipes separated by comma
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="chicken,onions,carrots"
                    className="form-control"
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="input-group-text bg-primary text-white"
                    >
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
