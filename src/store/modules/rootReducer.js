import { combineReducers } from "redux";

import {
  categoriesReducer,
  loadCategoriesReducer,
  setErrorCategoryReducer
} from "./categories/reducers";
import {
  jokeReducer,
  loadJokeReducer,
  setJokeErrorReducer
} from "./jokes/reducers";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  joke: jokeReducer,
  loadingCategories: loadCategoriesReducer,
  loadingJoke: loadJokeReducer,
  setErrorCategories: setErrorCategoryReducer,
  setErrorJoke: setJokeErrorReducer
});

export default rootReducer;
