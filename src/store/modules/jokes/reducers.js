import types from "./types";

export const jokeReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_JOKE_SUCCESS:
      let jokeIndex = state.findIndex(joke => joke.id === action.payload.id);
      if (jokeIndex === -1) return [...state, action.payload];
      return state;
    case types.RESET_JOKE:
      return [];
    default:
      return state;
  }
};

export const loadJokeReducer = (state = null, action) => {
  switch (action.type) {
    case types.LOAD_JOKE:
      return true;
    case types.LOAD_JOKE_SUCCESS:
    case types.LOAD_JOKE_FAIL:
      return false;
    default:
      return state;
  }
};

export const setJokeErrorReducer = (state = null, action) => {
  switch (action.type) {
    case types.LOAD_JOKE_FAIL:
      return action.payload;
    case types.LOAD_JOKE:
    case types.LOAD_JOKE_SUCCESS:
      return null;
    default:
      return state;
  }
};
