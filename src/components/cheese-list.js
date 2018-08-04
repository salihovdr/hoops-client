import React from 'react';
import { connect } from 'react-redux';
import CheeseForm from "./cheese-form";
import { fetchCheeses, postCheese } from '../actions/cheese';

export class CheeseList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  addNewCheese = (name) => {
    postCheese(name);
    fetchCheeses();
  }

  render() {

  const cheeses = this.props.cheeses.map((cheese, index) => 
    <li key={index}>{cheese.name}</li>
  );

    return (
      <main>
        <ul>
          {cheeses}
        </ul>
        <CheeseForm addCheese={this.addNewCheese}/>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
})

export default connect(mapStateToProps)(CheeseList);