
import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import { connect } from 'react-redux';
import './navbar.css';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export class Navbar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }
  render() {
    // Only render the log out button if we are logged in
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
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <Link to='/courts'>Courts</Link>
              </li>
              <li>
                <Link to='/events'>Events</Link>
              </li>
              <li>
                {logInOut}
              </li>
            </ul>
          </nav>
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);