import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infrastructure/interface/moviedb-response";

export const nowPlayingAction = async() => {
    try {
        const { data } = await movieApi.get<MovieDBResponse>('/now_playing')

        return [];

    } catch(error) {
        console.log(error)
        throw 'Cannot load now playing movies';
    }
}