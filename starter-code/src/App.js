import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox.js";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { foodList: foods, userInput: "" };
  }
  updateFoodList(event) {
    const inputTag = event.target;
    const foodResult = foods.filter(oneFood =>
      oneFood.name.toLowerCase().includes(inputTag.value.toLowerCase())
    );
    this.setState({ foodList: foodResult, userInput: inputTag.value });
  }

  render() {
    // console.table(this.state.foodList);
    const { foodList, userInput } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>IronNutrition</h2>
        <Search
          inputValue={userInput}
          onFoodSearch={event => this.updateFoodList(event)}
        />
        {foodList.map((food, index) => (
          <FoodBox key={index} oneFood={food} />
        ))}
      </div>
    );
  }
}

export default App;
