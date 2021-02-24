import React, { Component } from 'react';

class FoodBox extends Component {
  state = {
    quantity: 1,
  };

  handleInput = (event) => {
    this.props.recipe.quantity = event.target.value + this.props.recipe.quantity;
    this.setState({ quantity: event.target.value });
  };

  render() {
    return (
      <div>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.recipe.image} alt={this.props.recipe.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.recipe.name}</strong> <br />
                <small>{this.props.recipe.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  min="1"
                  value={this.state.quantity}
                  onChange={this.handleInput}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() => {
                    this.props.recipe.quantity = this.state.quantity + this.props.recipe.quantity;
                    this.props.updateTodayFood(this.props.recipe);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
