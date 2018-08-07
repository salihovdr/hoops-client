import React from 'react';
import { connect } from 'react-redux';
import { fetchCourts } from '../actions/court';

export class CourtList extends React.Component {

  // componentDidMount() {
  //   this.props.dispatch(fetchCourts(this.props.filter));
  // }

  render() {
    console.log(this.props);
    const courts = this.props.courts.map((court, index) => 
      <li key={index}>{court.name}</li>
    );

    return (
      <main>
        <ul>
          {courts}
        </ul>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  courts: state.courts,
  filter: state.filter
});

export default connect(mapStateToProps)(CourtList);