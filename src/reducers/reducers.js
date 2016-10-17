import actions from '../actions/actions.js';

let initialRepositoryState = [];

let repositoryReducer = (state, action) => {
    state = state || initialRepositoryState;
    if (action.type === actions.ADD_REPOSITORY) {
      return state.concat({
        name: action.repository,
        rating: null
      });
    } else if (action.type === actions.RATE_REPOSITORY) {
      let index = -1;
      for (let i = 0; i < state.length; i++) {
        let repository = state[i];
        if (repository.name === action.repository) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        throw new Error('Could not find repository.');
      }

      let before = state.slice(0,1);
      let after = state.slice(i + 1);
      let newRepository = Object.assign({}, repository, {
        rating: action.rating
      });
      return before.concat(newRepository, after);
    }
    return state;
};

exports.repositoryReducer = repositoryReducer;
