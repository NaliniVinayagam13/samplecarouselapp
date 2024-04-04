import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel, { Pagination } from "react-native-snap-carousel";

const { width: screenWidth } = Dimensions.get('window');

interface Slide {
    title: string
}

const CarouselWithPagination = ()  => {
    const slides: Slide[] = [
        { title: 'Slide 1' },
        { title: 'Slide 2' },
        { title: 'Slide 3' }
    ];

    const [position, setPosition] = useState(0);

    const renderItems = ({ item }: { item: Slide }) => (
        <View style={styles.slide}>
            <Text style={styles.text}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                data={slides}
                renderItem={renderItems}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                onSnapToItem={(index) => { setPosition(index) }}
            />


            <Pagination
                dotsLength={slides.length}
                activeDotIndex={position}
                containerStyle={styles.paginationContainer}
                dotStyle={styles.paginationDot}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6} />
        </View>

    )
}
export default CarouselWithPagination;

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 0,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
        marginHorizontal: 8,
    },
});




// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import Carousel, { Pagination } from 'react-native-snap-carousel';

// const { width: screenWidth } = Dimensions.get('window');

// interface Slide {
//   title: string;
// }

// const slides: Slide[] = [
//   { title: 'Slide 1' },
//   { title: 'Slide 2' },
//   { title: 'Slide 3' },
// ];

// const CarouselExample: React.FC = () => {
//   const [activeIndex, setActiveIndex] = React.useState(0);

//   const renderItem = ({ item }: { item: Slide }) => (
//     <View style={styles.slide}>
//       <Text style={styles.text}>{item.title}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         data={slides}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth}
//         onSnapToItem={(index) => setActiveIndex(index)}
//       />
//       <Pagination
//         dotsLength={slides.length}
//         activeDotIndex={activeIndex}
//         containerStyle={styles.paginationContainer}
//         dotStyle={styles.paginationDot}
//         inactiveDotOpacity={0.4}
//         inactiveDotScale={0.6}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   paginationContainer: {
//     position: 'absolute',
//     bottom: 0,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   paginationDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: 'rgba(0, 0, 0, 0.92)',
//     marginHorizontal: 8,
//   },
// });

// export default CarouselExample;
