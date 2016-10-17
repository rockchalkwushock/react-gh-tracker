import React from 'react';
import {connect} from 'react-redux';
import Repository from './Repository';
import actions from '../actions/actions';

class RepositoryList extends React.Component {
  addRepository() {
    let repositoryName = this.refs.repositoryName.value;
    this.props.dispatch(actions.addRepository(repositoryName));
  }

  render() {
    let repositories = this.props.repositories.map((repository) => {
      return <Repository repository={repository} key={repository.name} />;
    });

    return (
      <div className='repository-list'>
        {repositories}
        <input type='text' ref='repositoryName' />
        <button type='button' onClick={this.addRepository}>Add Repository</button>
      </div>
    );
  }
}

let mapStateToProps = (state, props) => {
  return {
    repositories: state
  }
}

let Container = connect(mapStateToProps)(RepositoryList);

export default Container;
