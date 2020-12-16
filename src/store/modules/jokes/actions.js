import types from "./types";

export const loadJoke = category => ({
  type: types.LOAD_JOKE,
  payload: category
});

export const setJoke = joke => ({
  type: types.LOAD_JOKE_SUCCESS,
  payload: joke
});

export const setJokeError = error => ({
  type: types.LOAD_JOKE_FAIL,
  payload: error
});

export const resetJoke = joke => ({
  type: types.RESET_JOKE,
  payload: joke
});
