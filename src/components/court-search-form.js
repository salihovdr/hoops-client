import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCourts, setFilter} from '../actions/courts';
import { FaSearch } from 'react-icons/fa';

import '../styles/court-search-form.css';

export class CourtSearchForm extends React.Component {
  
  onSubmit(e) {
    e.preventDefault();
    const filter = this.input.value.trim();
    this.props.dispatch(setFilter(filter));
    this.props.dispatch(fetchCourts(filter));
    this.props.history.push('/courts');
  }

  render(){
    return (
      <main role='main' className='court-search-form'>
        <div className="row">
          <div className="col-12">
            <form onSubmit={e => this.onSubmit(e)}>
              <input
                type="text" name="courtName" id="courtName"
                className="court-search-input"
                placeholder="Enter your 5-digit zipcode, i.e. 22207..."
                ref={input => (this.input = input)}
                required />
              <button type="submit" name="submit"
                id="searchButton" className="searchButton">
                <FaSearch/>
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  courts: state.court.courts,
  filter: state.court.filter
});

export default withRouter(connect(mapStateToProps)(CourtSearchForm));