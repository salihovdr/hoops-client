
import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import { connect } from 'react-redux';
import '../styles/navbar.css';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { resetFilter } from '../actions/courts';
import { fetchEvents } from '../actions/events';

export class Navbar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  showAllCourts() {
    this.props.dispatch(resetFilter());
  }
  showAllEvents() {
    this.props.dispatch(fetchEvents())
      .then(() => this.props.history.push('/events'));
  }

  render() {
    let logInOut = (<Link to="/login">Login/Signup</Link>);

    if (this.props.loggedIn) {
      logInOut = (
        <a href='' onClick={() => this.logOut()}>Log out</a>
      );
      
    }
    return (
      <ResponsiveMenu
        menuOpenButton={<FaBars size={30}/>}
        menuCloseButton={<FaTimes size={30}/>}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-nav"
        smallMenuClassName="small-menu-nav"
        menu={
          <header role="navigation" className="nav-bar">
            <section className="row">
              <Link className='col-6 left' to='/'><strong>Let's Hoop</strong></Link>
              <ul className='nav-ul col-6 right'>
                <li>
                  <Link to='/courts' onClick={() => this.showAllCourts()}>Courts</Link>
                </li>
                <li>
                  <Link to='' onClick={() => this.showAllEvents()}>Events</Link>
                </li>
                <li>
                  {logInOut}
                </li>
              </ul>
            </section>
          </header>
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);