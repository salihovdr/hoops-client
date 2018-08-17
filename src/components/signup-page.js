import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import SignUpForm from './signup-form';
import '../styles/signup-page.css';

export function SignUpPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's profile page
  if (props.loggedIn) {
    return <Redirect to="/courts" />;
  }
  return (
    <main role='main' className='signup-page'>
      <section className='row home'>
        <div className="col-12">
          <h1 className='signup-page-heading'>Sign up</h1>
        </div>
        <div className="col-12">
          <SignUpForm />
        </div>
        <div className="col-12">
          <p className='login-para'>Already have an account?</p>
          <p><Link className='login-link' to="/login"><span>Log in now!</span></Link></p>
        </div>
      </section>
    </main >
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUpPage);
