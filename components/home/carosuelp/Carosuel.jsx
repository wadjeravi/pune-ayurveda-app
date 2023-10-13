import React, { useState, useRef } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './Carosuel.style'

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
export default Carousel;