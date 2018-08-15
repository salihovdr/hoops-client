import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's profile page
  if (props.loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="registration">
      <h2>Register for Foo App</h2>
      <RegistrationForm />
      <Link to="/">Login</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
