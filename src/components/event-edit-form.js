import React from 'react';
import moment from 'moment';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import { putEvent, fetchSingleEvent, resetEditMode } from '../actions/events';

import '../styles/event-create-form.css';

export class EventEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { warning: null };
  }

  componentDidMount() {
    this.props.dispatch(fetchSingleEvent(this.props.eventWithId.eventId));
  }

  onSubmit(event) {
    event.preventDefault();
    const title = this.title.value;
    const description = this.description.value;
    const courtId = this.props.eventWithId.courtId.id;
    const eventId = this.props.eventWithId.eventId;
    const timestamp = {date: this.date.value, time: this.time.value};
  
    this.props.dispatch(putEvent(title, description, timestamp, courtId, eventId))
      .then(() => {
        this.props.dispatch(resetEditMode());
      });
  }
  
  handleChange(val){
    let date = new Date();
    if (!moment(val).isAfter(date)) {
      this.setState({warning: <div className="form-warning">Event date cannot be in the past</div>});
    } else {
      this.setState({warning:''});
    }
  }

  cancelEdit(){
    this.props.dispatch(resetEditMode());
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="text"
          name="eventTitle"
          id="eventTitle"
          className="eventTitle"
          ref={title => (this.title = title)}
          defaultValue={this.props.eventWithId.title} 
          required
        />
        <input 
          ref={description => (this.description = description)}
          defaultValue={this.props.eventWithId.description}
          name="eventDescription"
          id="eventDescription"
          className="eventDescription"
          placeholder="Description"
        />
        {this.state.warning}
        <input
          type="date"
          name="eventDate"
          id="eventDate"
          className="eventDate"
          ref={date => (this.date = date)}
          defaultValue={moment(this.props.eventWithId.time).format('YYYY-MM-DD')}
          onChange={(e)=>this.handleChange(e.target.value)}
          placeholder="Date"
          required
        />
        <input
          type="time"
          name="eventTime"
          id="eventTime"
          className="eventTime"
          ref={time => (this.time = time)}
          defaultValue={moment(this.props.eventWithId.time).format('hh:mm')} 
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

        <button onClick={()=>this.cancelEdit()}
          type="button"
          name="cancel"
          id="cancelEdit" 
          className="cancelEdit"
        >
          Cancel
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state, props) => {
  const currentUser = state.auth.currentUser;
  const eventId = props.event;
  const event = state.event.singleEvent;
  const eventWithId = Object.assign({}, event, {
    eventId
  });
  return { currentUser, eventWithId };
};

export default requiresLogin()(connect(mapStateToProps)(EventEditForm));