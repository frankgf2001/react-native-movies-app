import { View, Text, ActivityIndicator, ScrollView } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useMovies } from "@/presentation/hooks/useMovies";
import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MoviesHorizontalList from "@/presentation/components/movies/MoviesHorizontalList";

const HomeScreen = () => {

    const safeArea = useSafeAreaInsets();
    const { 
        nowPlayingQuery, 
        popularQuery,
        topRatedQuery,
        upComingQuery
    } = useMovies();

    if(nowPlayingQuery.isLoading){
        return (
            <View className="justify-center items-center flex-1" >
                <ActivityIndicator color="blue" size={40}/>
            </View>
        )
    }

    return (
        <ScrollView>
            <View className="mt-2 pb-10" style = {{ paddingTop: safeArea.top }}>
                <Text className="text-3xl font-bold px-4 mb-2">MovieApp</Text>

                {/* Carrusel */}
                <MainSlideshow movies={ nowPlayingQuery.data ?? [] } />

                {/* Popular */}
                <MoviesHorizontalList 
                    title="Populares" 
                    movies={ popularQuery.data ?? [] }
                    className="mb-5" 
                /> 

                {/* Top Rated */}
                <MoviesHorizontalList 
                    title="Mejor calificadas" 
                    movies={ topRatedQuery.data?.pages.flat() ?? [] } 
                    className="mb-5"
                    loadNextPage={ topRatedQuery.fetchNextPage }
                /> 

                {/* Upcoming */}
                <MoviesHorizontalList 
                    title="Próximamente en cines" 
                    movies={ upComingQuery.data ?? [] }
                    className="mb-5" 
                /> 
            </View>
        </ScrollView>
    );
};

export default HomeScreen;