import { LIKE_MOVIE } from "./types";

export const likeMovie = movie => {
  console.log(movie);
  return { type: LIKE_MOVIE, payload: movie };
};
