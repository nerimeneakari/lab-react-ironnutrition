import React, { Component } from "react";

class Search extends Component {
  render() {
    // console.log(this.props);

    return (
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input
            className="input"
            type="search"
            value={this.props.inputValue}
            onChange={this.props.onFoodSearch}
            placeholder="Search"
          />
        </p>
      </div>
    );
  }
}

export default Search;
