import { combineReducers } from "redux";
import movie from "./movie_reducers";
import like from "./like_reducers";

export default combineReducers({ movie, like });
