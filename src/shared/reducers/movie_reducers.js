import { FETCH_POPULAR_MOVIES } from "../actions/types";

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return [...action.payload];
    default:
      return state;
  }
}
