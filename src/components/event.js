
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import '../styles/event.css';
import { fetchSingleEvent, deleteSingleEvent, fetchEvents } from '../actions/events';

export class Event extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchSingleEvent(this.props.eventWithId.eventId));
  }

  delete() {
    this.props.dispatch(deleteSingleEvent(this.props.eventWithId.eventId))
      .then(() => {
        this.props.history.push(`/courts/${this.props.eventWithId.courtId.id}`);
      });
  }

  seeAllEvents(){
    this.props.dispatch(fetchEvents())
      .then(() => {
        this.props.history.push('/events');
      });
  }

  render() {
    const dateToFormat = this.props.eventWithId.time;
    const timeToFormat = this.props.eventWithId.time;
    const date = moment(dateToFormat).format('MM/DD/YYYY');
    const time = moment(timeToFormat).format('hh:mm');
    const court = this.props.eventWithId.courtId || '';
    const user = this.props.eventWithId.userId || '';
    const currentUser = this.props.currentUser || {};
    let deleteBtn;
    if (currentUser.id === user.id) {
      deleteBtn = <button className='deleteBtn' onClick={() => { if (window.confirm('Are you sure you wish to delete this event?')) this.delete(); }}>Delete</button>;
    }

    return (
      <main role='main' className='single-event'>
        <section className='row'>
          <div className="col-12 single-event-info">
            <h1 className='single-event-title'>{this.props.eventWithId.title}</h1>
            <div className="single-event-desc">{this.props.eventWithId.description}</div>
            <div className="single-event-courtName"><strong>Where: </strong><Link to={`/courts/${court.id}`}><span>{court.name}</span></Link></div>
            <div className="single-event-date"><strong>Date: </strong><span>{date}</span></div>
            <div className="single-event-time"><strong>Time: </strong><span>{time}</span></div>
            <div className="single-event-host"><strong>Host: </strong><Link to={`/users/${user.id}`}><span>{user.username}</span></Link></div>
            {deleteBtn}
            <button className='allEventsBtn' onClick={()=>this.seeAllEvents()}>Go to all events</button>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state, props) => {
  const currentUser = state.auth.currentUser;
  const eventId = props.match.params.eventId;
  const event = state.event.singleEvent;
  const eventWithId = Object.assign({}, event, {
    eventId });
  return {eventWithId, currentUser};
};

export default connect(mapStateToProps)(Event);