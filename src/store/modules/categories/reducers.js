import types from "./types";

export const initialState = {
  categories: []
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const loadCategoriesReducer = (state = false, action) => {
  switch (action.type) {
    case types.LOAD_CATEGORIES:
      return true;
    case types.LOAD_CATEGORIES_SUCCESS:
    case types.LOAD_CATEGORIES_FAIL:
      return false;
    default:
      return state;
  }
};

export const setErrorCategoryReducer = (state = null, action) => {
  switch (action.type) {
    case types.LOAD_CATEGORIES_FAIL:
      return action.payload;
    case types.LOAD_CATEGORIES:
    case types.LOAD_CATEGORIES_SUCCESS:
      return null;
    default:
      return state;
  }
};
