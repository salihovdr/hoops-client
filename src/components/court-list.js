import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourts } from '../actions/courts';

import './court-list.css';


export class CourtList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCourts(this.props.filter));
  }

  render() {
    console.log(this.props.courts);
    const courts = this.props.courts ? this.props.courts.map(court => (
      <li className="court-list-court" key={court.id}>
        <img className="court-list-court-img" src={court.photo} alt="court"/>
        <div className="court-list-court-name">
          <Link to={`/courts/${court.id}`}>{court.name}</Link>
        </div>
        <div className="court-list-court-desc">{court.description}</div>
      </li>
    )):[];

    return (
      <main>
        <header>
          <h1>Courts:</h1>
        </header>
        <div className="courts">
          <ul className="court-list">
            { courts }
          </ul>
        </div>
      </main>
    );
  }
}

// CourtList.defaultProps={ courts: [] };

const mapStateToProps = state => ({
  courts: state.court.courts,
  filter: state.court.filter
});

export default connect(mapStateToProps)(CourtList);