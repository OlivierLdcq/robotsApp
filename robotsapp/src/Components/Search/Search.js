import React, { Component } from "react";
import "./Search.css";
class Search extends Component {
  render() {
    return (
      <div className="Search">
        <h1>Robots App</h1>
        <input
          type="text"
          value={this.props.searchField}
          onChange={this.props.searchChanged}
        />
      </div>
    );
  }
}

export default Search;
