import {all} from 'redux-saga/effects';
import {moviesSaga} from "../components/Movies/saga/movies.saga";

export function* saga() {
    yield all([
        moviesSaga()
    ]);
}