import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter /*, Switch*/} from 'react-router-dom';
import Navbar from './navbar';
import Landing from './landing';
import CourtList from './court-list';
import Court from './court';
import EventForm from './event-create-form';
import EventEditPage from './event-edit-page';
import EventList from './event-list';
import Event from './event';
import User from './user';
import SignUpPage from './signup-page';
import {refreshAuthToken} from '../actions/auth';
import LoginPage from './login-page';

import '../grid.css';
import '../main.css';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    let Component;
    if (this.props.editing) {
      Component = EventEditPage;
    } else {
      Component = Event;
    }

    return (
      <div className="app">
        {/* <Switch> */}
        <Route path="/:other" component={Navbar} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/users/:userId" component={User} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/courts/:courtId" component={ Court } />
        <Route exact path="/courts" component={ CourtList } />
        <Route exact path="/courts/:courtId/create-event" component={ EventForm} />
        <Route exact path="/events" component={ EventList } />
        <Route exact path="/events/:eventId" component={ Component } />
        {/* </Switch> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  editing: state.event.editing
});

export default withRouter(connect(mapStateToProps)(App));
