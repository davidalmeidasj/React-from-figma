import MainService from "../../../service";

class MoviesService extends MainService {

    getMovies = () => {
        return this.get(`products/`);
    };
}

export default MoviesService;