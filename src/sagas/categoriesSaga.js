import { call, put, takeLatest } from "redux-saga/effects";

import { categories } from "../store/apis/chuckNorrisApi";
import types from "../store/modules/categories/types";
import {
  setCategories,
  setCategoryError
} from "../store/modules/categories/actions";

function* fetchJokeCategory() {
  try {
    const response = yield call(categories);
    yield put(setCategories(response.data));
  } catch (error) {
    yield put(setCategoryError(error.toString()));
  }
}

function* watchfetchJokeCategory() {
  yield takeLatest(types.LOAD_CATEGORIES, fetchJokeCategory);
}

export default watchfetchJokeCategory;
