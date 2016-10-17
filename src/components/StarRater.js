import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class StarRater extends React.Component {
  render() {
    let stars = [];
    for (let i = 0; i <5 ; i++) {
      let className;
      if (i < this.props.rating || 0) {
        className = <FontAwesome name='fa fa-star'/>;
      } else {
        className = <FontAwesome name='fa fa-star-o'/>;
      }
      let star = (
        <i className={className} key={i}
        onClick={this.props.onChange.bind(null, i + 1)}>
        </i>
      );
      stars.push(star);
    }
    return (
      <span className='star-rater'>
        {stars}
      </span>
    );
  }
}
