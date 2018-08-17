import React from 'react';
import moment from 'moment'
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import { putEvent, fetchSingleEvent } from '../actions/events';
import EventEditForm from './event-edit-form';

import '../styles/event-create-form.css';

export class EventEditPage extends React.Component {
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
    const courtId = this.props.courtId;
    const timestamp = {date: this.date.value, time: this.time.value};
  
    this.props.dispatch(putEvent(title, description, timestamp, courtId))
      .then(() => {
        this.props.history.push(`/courts/${this.props.courtId}`);
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

  render() {
    return (
      <main role='main' className='event-create-form'>
        <section className='row'>
          <div className="col-12">
            <h1 className='event-form-heading'>Edit event</h1>
          </div>
          <div className="col-12">
            <EventEditForm initialValues={{title: 'dummy title'}}/>
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

export default requiresLogin()(connect(mapStateToProps)(EventEditPage));