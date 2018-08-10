
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './event.css';
import { fetchSingleEvent } from '../actions/events';

export class Event extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchSingleEvent(this.props.eventId));
  }
  render() {
    const dateToFormat = this.props.time;
    const timeToFormat = this.props.time;
    const date = moment(dateToFormat).format('MM/DD/YYYY');
    const time = moment(timeToFormat).format('hh:mm');

    return (
      <main>
        <div className="single-event">
          <h1>{this.props.title}</h1>
          <div className="single-event-desc">{this.props.description}</div>
          <div><strong>Where: </strong><Link to={`/courts/${this.props.courtId.id}`}><span className="single-event-courtName">{this.props.courtId.name}</span></Link></div>
          <div><strong>Date: </strong><span className="single-event-date">{date}</span></div>
          <div><strong>Time: </strong><span className="single-event-time">{time}</span></div>
          <Link to={'/events'}>See all events</Link>
        </div>
      </main>
    );
  }
}

Event.defaultProps = { date: '', time: '', courtId: {} };

const mapStateToProps = (state, props) => {
  const eventId = props.match.params.eventId;
  const event = state.event.events[0]; //look here
  return Object.assign({}, event, {
    eventId
  });
};

export default connect(mapStateToProps)(Event);