import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infrastructure/interface/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const topRatedMoviesAction = async() => {
    try {
        const { data } = await movieApi.get<MovieDBResponse>('/top_rated')

        const movies = data.results.map((movie) => MovieMapper.fromMovieDBtoMovie(movie))

        return movies;

    } catch(error) {
        console.log(error)
        throw 'Cannot load now top rateds';
    }
}