import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourts, resetFilter } from '../actions/courts';

import '../styles/court-list.css';


export class CourtList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCourts(this.props.filter));
  }

  showAllCourts(){
    this.props.dispatch(resetFilter());
  }

  render() {
    let backToLandingPage = <Link to={'/'}>Find courts near you</Link>;
    let heading = (<h1 className='courtlist-heading'>Courts in Arlington</h1>);
    if (this.props.filter) {
      backToLandingPage = <a href='' onClick={() => this.showAllCourts()}>See all courts</a>;
      heading = <h1>Courts in '{this.props.filter}'</h1>;
    }
    if(this.props.courts.length < 1) {
      return ( 
        <main role='main' className='courts'>
          <section className="row courtlist-header">
            <div className='col-12'>
              {heading}
            </div>
            <div className='col-12 no-courts-found'>
              <p className='no-courts-para'>Unfortunately, there are no courts in this area.</p>
              <p>See <a href='' onClick={() => this.showAllCourts()}>all courts</a> or try a <Link to='/'> new search</Link></p>
            </div>
          </section>
        </main>
      );
    }
    const courts = this.props.courts ? this.props.courts.map(court => (
      <article key={court.id} className="col-4" role="contentinfo" aria-label="Court">
        <div className="box">
          <img src={court.photo} alt="court" />
          <div className="court-brief">
            <h2><Link to={`/courts/${court.id}`}>{court.name}</Link></h2>
            <p className='description'>{court.description}</p>
            <button className='see-more-btn'><Link to={`/courts/${court.id}`}>See more</Link></button>
          </div>
        </div>
      </article>
    )):[];

    return (
      <main role='main' className='courts'>
        <section className="row courtlist-header">
          <div className='col-12'>
            {heading}
            <div className='courts-near-you'>
              {backToLandingPage}
            </div>
          </div>
        </section>
        <section className="row" role="contentinfo" aria-label="List of basketball courts">
          {courts}  
        </section>
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