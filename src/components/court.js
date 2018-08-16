
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { fetchSingleCourt } from '../actions/courts';

import '../main.css';
import '../grid.css';

export class Court extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchSingleCourt(this.props.courtId));
  }
  render() {
    const hours = Object.keys(this.props.hours).map((day, index) => {
      return <li key={index}><b>{day}</b>: {this.props.hours[day]}</li>;});
    
    const address = Object.keys(this.props.address).map((field, index) => {
      return <li key={index}>{this.props.address[field]}</li>;});

    const events = this.props.events.map((event) => {
      return <li className='single-court-event-title' key={event.id}><span>{moment(event.time).format('MMM D')}</span> -- <Link to={`/events/${event.id}`}>{event.title}</Link></li>;
    });

    return (
      <main role='main' className='single-court'>
        <section className='row'>
          <div className="col-12">
            <div className="box">
              <img className="single-court-img" src={this.props.photo} alt="court"/>
              <h1 className="single-court-name">{this.props.name}</h1>
              <div className="single-court-desc">{this.props.description}</div>
              <div className='row'>
                <div className='col-4'>
                  <div className='label'><strong>Address:</strong></div>
                  <ul className='single-court-address' >
                    { address }
                  </ul>
                </div>
                <div className='col-4'>
                  <div className='label'><strong>Hours:</strong></div>
                  <ul className='single-court-hours' >
                    { hours }
                  </ul>
                </div>
                <div className='col-4'>

                  <div className='label-events'><strong>Events:</strong></div>

                  <Link className='create-new-event' to={`/courts/${this.props.courtId}/create-event`}>Create NEW!</Link>

                  <ul className='single-court-events' >
                    { events }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

Court.defaultProps = { hours: {}, address: {}, events: [] };

const mapStateToProps = (state, props) => {
  const courtId = props.match.params.courtId;
  const court = state.court.singleCourt;
  return Object.assign({}, court, {
    courtId
  });
};

export default connect(mapStateToProps)(Court);