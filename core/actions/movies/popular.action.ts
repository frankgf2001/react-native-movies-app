import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infrastructure/interface/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const popularMoviesAction = async() => {
    try {
        const { data } = await movieApi.get<MovieDBResponse>('/popular')

        const movies = data.results.map((movie) => MovieMapper.fromMovieDBtoMovie(movie))

        return movies;

    } catch(error) {
        console.log(error)
        throw 'Cannot load now playing movies';
    }
}