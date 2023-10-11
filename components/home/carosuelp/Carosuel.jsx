import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const Carousel = () => {
  const images = [
    "https://www.unitedayurveda.in/wp-content/uploads/2022/10/banner1-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1geB-fp8l5IlOheox0PEB4K4DOqupOA0ysA&usqp=CAU",
    "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/09/06/Pictures/ayurveda_80d7f144-d08d-11e9-a264-bc92e50e5c68.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  let swiperRef = useRef(null);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    swiperRef.current?.scrollTo(index);
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        style={styles.slider}
        showsPagination={false}
        onIndexChanged={(index) => setCurrentIndex(index)} 
      >
        {images.map((_, index) => (
          <View style={styles.slide} key={index}>
            <Image style={styles.image} source={{ uri: images[index] }} />
          </View>
        ))}
      </Swiper>

      <View style={styles.dotView}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={[
              styles.circle,
              { backgroundColor: index === currentIndex ? 'black' : 'grey' },
            ]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  slider: {
    height: 500,
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 150,
    resizeMode: 'cover',
    marginVertical: 10,
    marginTop: 20,
    padding: 60,
    borderRadius: 30,
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    marginTop: -320,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: 'grey',
    borderRadius: 50,
    marginHorizontal: 5,
  },
});

export default Carousel;