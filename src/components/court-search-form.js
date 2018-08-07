import React from 'react';
import './court-search-form.css';

export default class CourtSearchForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const filter = this.input.value.trim();
    this.props.setFilter(filter);
    
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
          id="searchButton"
          className="searchButton"
        >
          search
        </button>
      </form>
    );
  }
}