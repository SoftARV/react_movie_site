import _ from "lodash";
import { FETCH_POPULAR_MOVIES } from "../actions/types";

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return _.uniqBy([...state, ...action.payload], "id");
    default:
      return state;
  }
}
