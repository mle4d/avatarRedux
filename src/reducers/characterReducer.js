import { FETCH_CHARACTERS } from '../actions/characters';

const initialState = {
  list: []
};

export default function reducer(state = intitialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
