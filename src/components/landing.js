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
    <main role='main' className='landing'>
      <section className='row'>
        <div className='col-12'>
          <header>
            <div className="padded-multiline"><span>Is there a better way to make new friends?</span></div>
            <h1 className='landing-h1'>Find a court and start shooting!</h1>
          </header>
          <div>
            <CourtSearchForm />
          </div>
        </div>
      </section>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);