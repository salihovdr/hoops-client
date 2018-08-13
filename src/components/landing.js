import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

import CourtSearchForm from './court-search-form';
import './landing.css';


export function Landing(props) {
  // If we are logged in redirect straight to the user's profile page
  // if (props.loggedIn) {
  //   return <Redirect to="/user" />;
  // }

  return (
    <div className="home">
      <header>
        <h1>Find a court and let's play some hoops!</h1>
      </header>
      <main>
        <CourtSearchForm />
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);