import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infrastructure/interface/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
    page?: number;
    limit?: number;
}

export const topRatedMoviesAction = async({
    page = 1,
    limit = 10
}: Options) => {
    try {
        const { data } = await movieApi.get<MovieDBResponse>('/top_rated',{
            params: {
                page: page
            }
        })

        const movies = data.results.map((movie) => MovieMapper.fromMovieDBtoMovie(movie))

        return movies;

    } catch(error) {
        console.log(error)
        throw 'Cannot load now top rateds';
    }
}