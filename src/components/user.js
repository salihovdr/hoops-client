import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { fetchUser } from '../actions/users';
import '../styles/user.css';

export class User extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUser(this.props.userId));
  }

  render() {
    return (
      <main role='main' className='courts'>
        <section className="row courtlist-header">
          <div className='col-4 user'>
            <div className="box">
              <img className="single-court-img" src={this.props.photo} alt="userpic" />
              <div className="user-name">{this.props.firstName} {this.props.lastName}</div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state, props) => {
  const userId = props.match.params.userId;
  const user = state.user.user;
  return Object.assign({}, user, {
    userId
  });
};

export default requiresLogin()(connect(mapStateToProps)(User));
