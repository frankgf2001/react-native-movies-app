import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const MovieScreen = () => {

    const { id } = useLocalSearchParams();

    console.log(`El parámetro es: ${id}`)

    getMovieByIdAction(+id)

    return (
        <View>
            <Text>
                Movie Screen
            </Text>
        </View>
    );
};

export default MovieScreen;