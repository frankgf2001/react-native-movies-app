import { Cast } from "@/infrastructure/interface/cast.interface";
import { FlatList, Text, View } from "react-native"
import ActorCast from "./ActorCard";

interface Props {
    cast: Cast[]
}

const MovieCast = ({cast }:Props) => {
    return (
        <View className="mt-5 mb-10">
            <Text className="font-bold text-2xl px-5">Actores</Text>

            <FlatList
                data={cast}
                keyExtractor={(item) => `${item.id}` }
                horizontal
                showsHorizontalScrollIndicator = {false}
                renderItem={({item}) => <ActorCast actor={ item }/>}
            />
        </View>
    )
}

export default MovieCast;