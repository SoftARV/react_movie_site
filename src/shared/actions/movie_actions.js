import axios from "axios";

import { MOVIE_API_KEY, MOVIE_API_URL, MOVIE_API_POPULAR } from "../constants";
import { FETCH_POPULAR_MOVIES } from "./types";

export const fetchPopularMovies = page => async dispatch => {
  try {
    let { data } = await axios.get(
      MOVIE_API_URL +
        MOVIE_API_POPULAR +
        "?api_key=" +
        MOVIE_API_KEY +
        "&page=" +
        page
    );

    dispatch({ type: FETCH_POPULAR_MOVIES, payload: data.results });
  } catch (err) {
    console.log(err);
  }
};
