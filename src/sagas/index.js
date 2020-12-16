import { all } from "redux-saga/effects";

import watchfetchJokeCategory from "./categoriesSaga";
import watchFetchJoke from "./jokeSaga";

function* rootSaga() {
  yield all([watchfetchJokeCategory(), watchFetchJoke()]);
}

export default rootSaga;
