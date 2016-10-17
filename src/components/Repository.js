import React from 'react';
import {connect} from 'react-redux';
import StarRater from './StarRater';
import actions from '../actions/actions';

class Repository extends React.Component {
  changeRating(rating) {
    this.props.dispatch(
      actions.rateRepository(this.props.repository.name, rating)
    );
  }

  render() {
    return (
      <div>
        {this.props.repository.name}
        &nbsp;
        <StarRater rating={this.props.repository.rating}
                   onChange={this.changeRating} />
      </div>
    );
  }
}

let Container = connect()(Repository);

export default Container;
