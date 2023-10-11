import { useState} from 'react'
import { View, Image ,Text, TouchableOpacity, FlatList,  ScrollView} from 'react-native'

import styles from './favouritepicks.style'
import img1 from '../../../assets/images/vitaminB12.jpg';
import img2 from '../../../assets/images/herbalance.jpg';
import img3 from '../../../assets/images/greenTea.jpg'
import img4 from '../../../assets/images/vitaminB12.jpg'
import FavouritePicksCard from '../../common/cards/favourite/FavouritePicksCard'
import { SIZES } from '../../../constants';

const FavouritePicks = () => {

  const staticImages = [
    { id: '1', uri: img1, price:'$100'},
    { id: '2', uri: img2, price:'$200'},
    { id: '3', uri: img3, price:'$300'},
    { id: '4', uri: img4, price:'$400'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Favourite Picks</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All{'>'} </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>{/* Add space between header and cards */}</View> 
          <FlatList
            data={staticImages}
            renderItem={({ item }) => (
              <FavouritePicksCard
                item={item}
              />
            )}  
            keyExtractor={item => item?.id}
            contentContainerStyle={{ columnGap: SIZES.medium}}
            horizontal
          />
      </View>
  )
}

export default FavouritePicks