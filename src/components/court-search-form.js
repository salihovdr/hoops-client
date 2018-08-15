import React from 'react';
import { connect } from 'react-redux';
import './court-search-form.css';
import { Link, withRouter } from 'react-router-dom';
import { fetchCourts, setFilter, resetFilter} from '../actions/courts';
import { FaSearch } from 'react-icons/fa';

export class CourtSearchForm extends React.Component {
  
  onSubmit(e) {
    e.preventDefault();
    const filter = this.input.value.trim();
    this.props.dispatch(setFilter(filter));
    this.props.dispatch(fetchCourts(filter));
    this.props.history.push('/courts');
  }

  showAllCourts() {
    this.props.dispatch(resetFilter());
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
                placeholder="Enter your 5-digit zipcode"
                ref={input => (this.input = input)}
                required />
              <button type="submit" name="submit"
                id="searchButton" className="searchButton">
                <FaSearch/>
              </button>
            </form>
            <Link className="see-all-courts" to={'/courts'} onClick={() => this.showAllCourts()}> ... or see all courts</Link>
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