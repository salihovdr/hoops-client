import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEvents } from '../actions/court';

import './event-list.css';


export class EventList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }

  render() {
    console.log(this.props.events);
    let events = this.props.events.map(event => (
      <li className="event-list-event" key={event.id}>
        <div className="event-list-event-title">
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </div>
        <div className="event-list-event-desc">{event.description}</div>
      </li>
    ));

    return (
      <main>
        <header>
          <h1>Events:</h1>
        </header>
        <div className="events">
          <ul className="event-list">
            {events}
          </ul>
        </div>
      </main>
    );
  }
}

EventList.defaultProps = { events: [] };

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps)(EventList);