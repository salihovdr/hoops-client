import React from 'react';

import './event-create-form.css';
import { connect } from 'react-redux';
import { postEvent } from '../actions/events';

export class EventForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const title = this.title.value;
    const description = this.description.value;
    const courtId = this.props.courtId;
    const timestamp = {date: this.date.value, time: this.time.value};
  
    this.props.dispatch(postEvent(title, description, timestamp, courtId))
      .then(() => {
        this.props.history.push(`/courts/${this.props.courtId}`);
      });
  }

  render() {
    return (
      <main role='main' className='event-create-form'>
        <section className='row'>
          <div className="col-12">
            <h1 className='event-form-heading'>Create new event</h1>
          </div>
          <div className="col-12">
            <form onSubmit={e => this.onSubmit(e)}>
              <input
                type="text"
                name="eventTitle"
                id="eventTitle"
                className="eventTitle"
                ref={title => (this.title = title)}
                placeholder="Event title..."
                required
              />
              <textarea 
                ref={description => (this.description = description)}
                onChange={this.handleChange}
                name="eventDescription"
                id="eventDescription"
                className="eventDescription"
                placeholder="Description"
              />
              <input
                type="date"
                name="eventDate"
                id="eventDate"
                className="eventDate"
                ref={date => (this.date = date)}
                placeholder="Date"
                required
              />
              <input
                type="time"
                name="eventTime"
                id="eventTime"
                className="eventTime"
                ref={time => (this.time = time)}
                placeholder="Time"
                required
              />
        
              <button 
                type="submit"
                name="submit"
                id="submitButton" 
                className="button"
              >
          Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state, props) => {
  const courtId = props.match.params.courtId;
  const court = state.courts;
  return Object.assign({}, court, {
    courtId
  });
};

export default connect(mapStateToProps)(EventForm);