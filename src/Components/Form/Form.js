import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
  };

  handleInput = (event) => {
    let { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    // Take the value from the `state` object, send it to MovieList
    const newProduct = this.state;
    
    this.props.addProduct(newProduct);

    // Clear the form at the end, by resetting the `state`
    this.setState({ name: '', calories: '', image: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Add a product:</h2>
          <br />

          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />

          <br />

          <label>Calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={this.handleInput}
          />
          <br />

          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleInput}
          />
          <br />

          <br />
          <button type="submit">Create</button>
        </form>

        <br />
      </div>
    );
  }
}

export default Form;
