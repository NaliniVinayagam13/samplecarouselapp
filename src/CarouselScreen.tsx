import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window')

interface Slide {
    title: string
}
const MyCarousel = () => {

    const slides: Slide[] = [
        { title: 'Slide 1' },
        { title: 'Slide 2' },
        { title: 'Slide 3' },
    ];

    const renderItem = ({ item }: { item: Slide }) => (
        <View style={styles.slide}>
            <Text style={styles.text}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                data={slides}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth} />
        </View>
    )
}

export default MyCarousel

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
});
