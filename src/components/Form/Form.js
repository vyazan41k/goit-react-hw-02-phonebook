import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  inputFormChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputFormChange}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.inputFormChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
