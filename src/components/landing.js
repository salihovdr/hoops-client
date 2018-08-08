import React from 'react';
import { connect } from 'react-redux';
import CourtSearchForm from './court-search-form';
import CourtList from './court-list';
import Court from './court';
import { BrowserRouter as Router, Route /*, Switch */ } from 'react-router-dom';

import './landing.css';
//import { EventForm } from './event-form';


export class Landing extends React.Component {

  // setFilter(filter){
  //   this.props.dispatch(setFilter(filter));
  //   this.props.dispatch(fetchCourts(filter));
  // }

  render() {
    return (
      <Router>
        <div className='landing'>
          {/* <Switch> */}
          <Route path="/" exact component={ CourtSearchForm } />
          <Route exact path="/courts/:courtId" component={ Court } />
          <Route exact path="/courts" component={ CourtList } />
          {/* <Route exact path="/courts/:courtId/new-event" component={ EventForm } /> */}
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  courts: state.courts,
  filter: state.filter
});

export default connect(mapStateToProps)(Landing);