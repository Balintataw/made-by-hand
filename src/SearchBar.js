import React, { Component } from 'react';
import AddRecipe from './AddRecipe';

class SearchBar extends Component {
    makeRecipeEntry() {
        console.log('made')
        
    }

    render() {
        return (
            <div className="searchBar">
                <input id="searchInput"></input>
                <div className="button-container">
                    <button id="searchBtn" type="submit">Search</button>
                    <button id="addBtn" type="submit" onClick={this.makeRecipeEntry}>Add Recipe</button>
                </div>
                <AddRecipe />
            </div>
    );
  }
}

export default SearchBar;
