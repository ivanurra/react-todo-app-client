import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }

  add = () => this.setState({ ...this.state, value: this.state.value + 1 })
  substract = () => this.setState({ ...this.state, value: this.state.value - 1 })

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button onClick={() => this.substract()}>Substract</button>
        <button onClick={() => this.add()}>Add</button>
      </div>
    )
  }
}