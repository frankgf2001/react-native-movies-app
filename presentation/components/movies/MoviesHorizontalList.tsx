import { Movie } from "@/infrastructure/interface/movie.interface";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";
import { useRef } from "react";

interface Props {
    title?: string;
    movies: Movie[];
    className?: string;

    loadNextPage?: () => void;
}

const MoviesHorizontalList = ({ 
    title, 
    movies, 
    className,
    loadNextPage 
}:Props) => {

    const isLoading = useRef(false)

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if(isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width

        if(!isEndReached) return;

        isLoading.current = true;

        loadNextPage && loadNextPage()
    }

    return (
        <View className={`${ className }`}>
            { title && <Text className="text-3xl px-4 mb-2">{title}</Text> }

            <FlatList 
                horizontal
                data={movies}
                showsHorizontalScrollIndicator = { false }
                keyExtractor={(item) => `${item.id}`}
                renderItem={({item}) => 
                    <MoviePoster id={ item.id } poster={ item.poster } smallPoster = { true }/>
                }
                onScroll={ onScroll }
            />
        </View>
    )
}

export default MoviesHorizontalList;