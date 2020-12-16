import types from "./types";

export const loadCategories = () => ({
  type: types.LOAD_CATEGORIES
});

export const setCategories = categories => ({
  type: types.LOAD_CATEGORIES_SUCCESS,
  payload: categories
});

export const setCategoryError = error => ({
  type: types.LOAD_CATEGORIES_FAIL,
  payload: error
});
