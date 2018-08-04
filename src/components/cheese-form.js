import React from 'react';
import './cheese-form.css';

export default class CheeseForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const name = this.input.value.trim();
    
    if (name && this.props.addCheese) {
      this.props.addCheese(name);
    }
    this.input.value = '';
    this.input.focus();
  }
  render(){
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="text"
          name="cheeseName"
          id="cheeseName"
          className="cheeseName"
          min="1"
          max="50"
          autoComplete="off"
          ref={input => (this.input = input)}
          required
        />
        <button
          type="submit"
          name="submit"
          id="addButton"
          className="addButton"
        >
          add
        </button>
      </form>
    );
  }
}