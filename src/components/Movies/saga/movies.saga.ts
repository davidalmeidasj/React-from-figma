import {all, takeLatest, put, call} from 'redux-saga/effects';
import {SEED_MOVIES} from "../redux/type";
import {fetchMovieList, loading} from "../redux/action";
import {push} from "connected-react-router";
import MoviesService from "../service/movies.service";
import {IMovie} from "../../../interfaces/product";
import {IAPIResponse} from "../../../interfaces/redux-interface";


function* executeSeedMovies() {
    yield put(loading(true));

    try {
        const service = new MoviesService();
        const response: IAPIResponse<IMovie[]> = yield call(service.getMovies);

        yield put(fetchMovieList(response.data))
    } catch (e) {
        yield put(push('/redirect/error/page'));
    } finally {
        yield put(loading(false));
    }
}

function* watchSeedMovies() {
    yield takeLatest(SEED_MOVIES, executeSeedMovies);
}

export function* moviesSaga() {
    yield all([
        watchSeedMovies()
    ]);
}