import { call, put, takeLatest } from "redux-saga/effects";
import { joke } from "../store/apis/chuckNorrisApi";
import types from "../store/modules/jokes/types";
import { setJoke, setJokeError } from "../store/modules/jokes/actions";

function* fetchJoke(action) {
  try {
    const response = yield call(joke, action.payload);
    yield put(setJoke(response.data));
  } catch (error) {
    yield put(setJokeError(error.toString()));
  }
}

function* watchFetchJoke() {
  yield takeLatest(types.LOAD_JOKE, fetchJoke);
}

export default watchFetchJoke;
