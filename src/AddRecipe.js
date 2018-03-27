import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './resources/css/addRecipe.css'

class AddRecipe extends Component {
  render() {
    return (
      <div className="addRecipeContainer">
      {/* <div className="addRecipeContainer"> */}
        <form>
            <label></label>
            <input placeholder="recipe name"></input>
        </form>
      </div>
    );
  }
}

export default AddRecipe;
