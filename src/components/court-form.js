import React from 'react';
import './court-form.css';

export default class CourtForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const name = this.input.value.trim();
    
    if (name && this.props.addCourt) {
      this.props.addCourt(name);
    }
    this.input.value = '';
    this.input.focus();
  }
  render(){
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="text"
          name="courtName"
          id="courtName"
          className="courtName"
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