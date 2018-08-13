import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Switch} from 'react-router-dom';

import Navbar from './navbar';
import Landing from './landing';
import CourtList from './court-list';
import Court from './court';
import EventForm from './event-create-form';
import EventList from './event-list';
import Event from './event';
import User from './user';
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';
import LoginForm from './login-form';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/user" component={User} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/courts/:courtId" component={ Court } />
          <Route exact path="/courts" component={ CourtList } />
          <Route exact path="/courts/:courtId/create-event" component={ EventForm} />
          <Route exact path="/events" component={ EventList } />
          <Route exact path="/events/:eventId" component={ Event } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // courts: state.court.courts,
  // filter: state.court.filter,
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
