import React from 'react';
import { connect } from 'react-redux';
import CourtSearchForm from "./court-search-form";
import { fetchCourts, setFilter } from '../actions/court';
import { CourtList } from './court-list';

export class Landing extends React.Component {
  
  // componentDidMount() {
  //   this.props.dispatch(fetchCourts(this.props.filter));
  // }

  setFilter = (filter) => {
    this.props.dispatch(setFilter(filter));
    this.props.dispatch(fetchCourts(filter));
  }

  render() {

    return (
      <main>
        <CourtSearchForm setFilter={this.setFilter} />
        <CourtList courts={this.props.courts}/>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  courts: state.courts,
  filter: state.filter
})

export default connect(mapStateToProps)(Landing);