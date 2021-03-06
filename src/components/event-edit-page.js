import React from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import { fetchSingleEvent } from '../actions/events';
import EventEditForm from './event-edit-form';

import '../styles/event-create-form.css';

export class EventEditPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchSingleEvent(this.props.eventWithId.eventId));
  }

  render() {
    return (
      <main role='main' className='event-create-form'>
        <section className='row'>
          <div className="col-12">
            <h1 className='event-form-heading'>Edit event</h1>
          </div>
          <div className="col-12">
            <EventEditForm event={this.props.eventWithId.eventId} />
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