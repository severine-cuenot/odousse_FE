import { LAUNCH_SEARCH } from '../actions';

export const initialState = {
  yourLitreage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LAUNCH_SEARCH:
      return {
        ...state,
        yourLitreage: action.yourLitreage,
      };
    default:
      return state;
  }
};

export default reducer;
