import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import '../styles/login-page.css';

export function LoginPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's profile page
  if (props.loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <main role='main' className='login-page'>
      <section className='row home'>
        <div className="col-12">
          <h1 className='login-page-heading'>Login</h1>
        </div>
        <div className="col-12">
          <LoginForm />
        </div>
        <div className="col-12">
          <p className='signup-para'>Don't have an account yet?</p>
          <p><Link className='signup-link' to="/signup"><span>Sign up now!</span></Link></p>
        </div>
      </section>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);