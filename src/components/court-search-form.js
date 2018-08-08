import React from 'react';
import { connect } from 'react-redux';
import './court-search-form.css';
import { Link } from 'react-router-dom';
import { fetchCourts, setFilter } from '../actions/court';

export class CourtSearchForm extends React.Component {
  
  onSubmit(e) {
    e.preventDefault();
    const filter = this.input.value.trim();
    console.log(filter);
    this.props.dispatch(setFilter(filter));
    this.props.dispatch(fetchCourts(filter));
    this.props.history.push('/courts');
    
    this.input.value = '';
    this.input.focus();
  }
  render(){
    return (
      <div className="court-search-form">
        <header>
          <h1>Find a court and let's play some hoops!</h1>
        </header>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type="text"
            name="courtName"
            id="courtName"
            className="courtName"
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

          <Link className="see-all-courts" to={'/courts'}> See all courts</Link>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courts: state.courts,
  filter: state.filter
});

export default connect(mapStateToProps)(CourtSearchForm);