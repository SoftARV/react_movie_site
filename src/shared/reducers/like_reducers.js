import _ from "lodash";
import { LIKE_MOVIE } from "../actions/types";

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LIKE_MOVIE:
      return _.uniqBy([action.payload, ...state], "id");
    default:
      return state;
  }
}
