
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './event.css';
import { fetchSingleEvent, deleteSingleEvent } from '../actions/events';

export class Event extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchSingleEvent(this.props.eventId));
  }

  delete() {
    this.props.dispatch(deleteSingleEvent(this.props.eventId))
      .then(() => {
        this.props.history.push(`/courts/${this.props.courtId.id}`);
      })
  }

  seeAllEvents(){
    this.props.history.push('/events');
  }

  render() {
    const dateToFormat = this.props.time;
    const timeToFormat = this.props.time;
    const date = moment(dateToFormat).format('MM/DD/YYYY');
    const time = moment(timeToFormat).format('hh:mm');

    return (
      <main role='main' className='single-event'>
        <section className='row'>
          <div className="col-12 single-event-info">
            <h1 className='single-event-title'>{this.props.title}</h1>
            <div className="single-event-desc">{this.props.description}</div>
            <div className="single-event-courtName"><strong>Where: </strong><Link to={`/courts/${this.props.courtId.id}`}><span>{this.props.courtId.name}</span></Link></div>
            <div className="single-event-date"><strong>Date: </strong><span>{date}</span></div>
            <div className="single-event-time"><strong>Time: </strong><span>{time}</span></div>
            <div className="single-event-host"><strong>Host: </strong><Link to={`/users/${this.props.userId.id}`}><span>{this.props.userId.username}</span></Link></div>
            <button className='deleteBtn' onClick={() => { if (window.confirm('Are you sure you wish to delete this event?')) this.delete() } }>Delete</button>
            <button className='allEventsBtn' onClick={()=>this.seeAllEvents()}>Go to all events</button>
          </div>
        </section>
      </main>
    );
  }
}

Event.defaultProps = { date: '', time: '', courtId: {}, userId: {} };

const mapStateToProps = (state, props) => {
  const eventId = props.match.params.eventId;
  const event = state.event.singleEvent;
  return Object.assign({}, event, {
    eventId
  });
};

export default connect(mapStateToProps)(Event);