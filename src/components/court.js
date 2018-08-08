
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './court.css';
import { fetchSingleCourt } from '../actions/court';

export class Court extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchSingleCourt(this.props.courtId));
  }
  render() {

    return (
      <main>
        <div className="single-court">
          <h1>{this.props.name}</h1>
          <img className="single-court-img" src={this.props.photo} alt="court"/>
          <div className="single-court-desc">{this.props.description}</div>
          <Link to={`/courts/${this.props.courtId}/create-event`}>Create event</Link>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state, props) => {
  const courtId = props.match.params.courtId;
  const court = state.courts;
  return Object.assign({}, court, {
    courtId
  });
};

export default connect(mapStateToProps)(Court);