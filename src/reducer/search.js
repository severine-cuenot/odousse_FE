import { LAUNCH_SEARCH } from '../actions';

export const initialState = {
  yourLitereage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LAUNCH_SEARCH:
      return {
        ...state,
        yourLitereage: action.learnOrShare,
      };
    default:
      return state;
  }
};

export default reducer;
