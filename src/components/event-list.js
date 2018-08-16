import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEvents, setPage } from '../actions/events';
import moment from 'moment';

import './event-list.css';


export class EventList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }
  next() {
    this.props.dispatch(fetchEvents(this.props.page+1));
    this.props.dispatch(setPage(this.props.page+1));
  }
  previous() {
    this.props.dispatch(fetchEvents(this.props.page - 1));
    this.props.dispatch(setPage(this.props.page-1));
  }

  render() {
    let events = this.props.events.map(event => {
      return (<article key={event.id} className="col-12 event-list-event" role="contentinfo" aria-label="Court">
        <div className="event-list-event-title">
          <Link to={`/events/${event.id}`}><h2>{event.title}<sup><span className='event-list-event-date'> ({moment(event.time).format('MMM D')})</span></sup></h2></Link>
        </div>
        <div className="event-list-event-desc">{event.description}</div>
        <button className='see-more-button'><Link to={`/events/${event.id}`}>See more</Link></button>
      </article>);
    });

    let nextBtn;
    let prevBtn;
    if (this.props.page > 0) {
      prevBtn = <button class='prevBtn' onClick={() => this.previous()}>Previous</button>;
    }
    if(this.props.events.length>4) {
      nextBtn = <button class='nextBtn' onClick={this.next.bind(this)}>Next</button>;
    }


    return (
      <main role='main' className='events'>
        <section className="row eventlist-header">
          <div className='col-12'>
            <h1 className='eventlist-heading'>Events</h1>
          </div>
          <div className="row events">
            {events}
          </div>
          <div className='col-12 center'>
            {prevBtn} 
            {nextBtn}
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  events: state.event.events,
  page:state.event.page
});

export default connect(mapStateToProps)(EventList);