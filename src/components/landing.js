import React from 'react';
import { connect } from 'react-redux';
import CourtSearchForm from './court-search-form';
import { fetchCourts, resetFilter} from '../actions/courts';
import '../styles/landing.css';

export class Landing extends React.Component {
  showAllCourts() {
  this.props.dispatch(resetFilter());
  this.props.dispatch(fetchCourts())
    .then(()=>this.props.history.push('/courts'));
}
render(){
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
          <div className='col-12'>
          <button id='show-all-courts-btn' onClick={() => this.showAllCourts()}>See all</button>
          </div>
        </div>
      </section>
    </main>
  );
}
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);