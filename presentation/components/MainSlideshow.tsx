import { Movie } from '@/infrastructure/interface/movie.interface';
import { useRef } from 'react';
import { View, Text, useWindowDimensions } from 'react-native'
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

interface Props {
    movies: Movie[]
}

const MainSlideshow = ({movies}: Props) => {

    const ref = useRef<ICarouselInstance>(null);
    const width = useWindowDimensions().width; 

    return (
        <View className='h-[250px] w-full'>
            <Carousel
                ref = {ref} 
                data={movies}
                renderItem={({ item }) => <Text>{item.title}</Text> }
                width={200}
                height={350}
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.8,
                    parallaxScrollingOffset: 80
                }}
                defaultIndex={2}
            />
        </View>
    );
};

export default MainSlideshow;