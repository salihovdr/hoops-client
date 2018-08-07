import React from 'react';
import { connect } from 'react-redux';
import Court from './court';
import {Link} from 'react-router-dom';
//import { API_BASE_URL } from '../config';
//import { fetchCourts } from '../actions/court';

export class CourtList extends React.Component {

  // componentDidMount() {
  //   this.props.dispatch(fetchCourts(this.props.filter));
  // }

  render() {

    const courts = this.props.courts.map((court) =>
            <li key={court.id}>
                <Link to={`/${court.id}`}><Court {...court} /></Link>
            </li>
        );

    return (
      <div>
        <ul className='courtList'>
          {courts}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courts: state.courts,
  filter: state.filter
})

export default connect(mapStateToProps)(CourtList);