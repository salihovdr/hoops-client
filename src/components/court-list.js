import React from 'react';
import { connect } from 'react-redux';
import CourtForm from "./court-form";
import { fetchCourts, postCourt } from '../actions/court';

export class CourtList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCourts());
  }

  addNewCourt = (name) => {
    this.props.dispatch(postCourt(name));
  }

  render() {

  const courts = this.props.courts.map((court, index) => 
    <li key={index}>{court.name}</li>
  );

    return (
      <main>
        <ul>
          {courts}
        </ul>
        <CourtForm addCourt={this.addNewCourt}/>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  courts: state.courts
})

export default connect(mapStateToProps)(CourtList);