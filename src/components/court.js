
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './court.css';
import { fetchSingleCourt } from '../actions/courts';

export class Court extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchSingleCourt(this.props.courtId));
  }
  render() {
    const hours = Object.keys(this.props.hours).map((day, index) => {
      return <li key={index}><b>{day}</b>: {this.props.hours[day]}</li>;
    });

    const address = Object.keys(this.props.address).map((field, index) => {
      return <li key={index}>{this.props.address[field]}</li>;
    });

    const eventName = this.props.events.map((event, index) => {
      return <li key={index}>{event.title}</li>;
    });
    const eventId = this.props.events.map(event => {
      return event.id;
    });

    return (
      <main>
        <div className="single-court">
          <h1>{this.props.name}</h1>
          <img className="single-court-img" src={this.props.photo} alt="court"/>
          <div className="single-court-desc">{this.props.description}</div>
          <div><strong>Address:</strong></div>
          <ul className="single-court-address">{ address }</ul>
          <div><strong>Hours:</strong></div>
          <ul className="single-court-hours">{ hours }</ul>
          <div><strong>Events:</strong></div>
          <Link to={`/events/${eventId}`}><ul className="single-court-hours">{ eventName }</ul></Link>
          <Link to={`/courts/${this.props.courtId}/create-event`}>Create event</Link>
        </div>
        <Link className="see-all-courts" to={'/courts'}> See all courts</Link>
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

// const mapStateToProps = (state, props) => ({
//   courtId: props.match.params.courtId,
//   singleCourt: state.court.singleCourt
// });

export default connect(mapStateToProps)(Court);