import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import Form from './Components/Form/Form';
import Search from './Components/Search/Search';

class App extends Component {
  state = {
    foods: foods,
    todayFood: [],
    totalCal: 0,
    showForm: false,
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  addNewProduct = (newProduct) => {
    const updateFoods = [newProduct, ...this.state.foods];
    this.setState({ foods: updateFoods });
  };

  updateList = (event) => {
    const value = event.target.value;

    const filtered = foods.filter((product) => {
      return product.name.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({ foods: filtered });
  };

  updateTodayFood = (recipe) => {
    console.log(recipe.quantity);
    if (recipe.quantity > 0) {
      let todayList = [];
      if (!this.state.todayFood.includes(recipe)) {
        todayList = [recipe, ...this.state.todayFood];
      } else {
        todayList = [...this.state.todayFood]
      }
      const totalCal = this.state.totalCal + recipe.calories * recipe.quantity;

      this.setState({ todayFood: todayList, totalCal });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Restaurant</h1>
        <button onClick={this.toggleForm}>
          {this.state.showForm ? 'Hide form' : 'Add new product'}
        </button>
        {this.state.showForm ? <Form addProduct={this.addNewProduct} /> : null}
        <div className="flex">
          <div className="box">
            <Search updatelist={this.updateList} />
            {this.state.foods.map((recipe) => {
              return (
                <FoodBox
                  key={recipe.name}
                  recipe={recipe}
                  updateTodayFood={this.updateTodayFood}
                />
              );
            })}
          </div>
          <div className="box">
            <h3>Today's foods</h3>
            <ul>
              {this.state.todayFood.map((product) => {
                return (
                  <li key={product.name}>
                    {product.quantity} {product.name} ={' '}
                    {product.calories * product.quantity}cal
                  </li>
                );
              })}
            </ul>
            <p>Total: {this.state.totalCal} cal</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
