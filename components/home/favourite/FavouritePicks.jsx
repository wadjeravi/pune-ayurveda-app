import { useState } from 'react'
import { View, Image, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'

import styles from './favouritepicks.style'
import img1 from '../../../assets/images/vitaminB12.jpg';
import img2 from '../../../assets/images/herbalance.jpg';
import img3 from '../../../assets/images/greenTea.jpg'
import img4 from '../../../assets/images/vitaminB12.jpg'
import FavouritePicksCard from '../../common/cards/favourite/FavouritePicksCard'
import { SIZES } from '../../../constants';

const FavouritePicks = () => {

  const staticImages = [
    { id: '1', uri: img1, originalPrice: '$100', discountPrice: '$50', name: 'VitaminB12', description: '30 capsules', discount: "50% Off" },
    { id: '2', uri: img2, originalPrice: '$200', discountPrice: '$100', name: 'Herbalance', description: '50g', discount: "50% Off" },
    { id: '3', uri: img3, originalPrice: '$300', discountPrice: '$150', name: 'GreenTea', description: '80g', discount: "50% Off" },
    { id: '4', uri: img4, originalPrice: '$400', discountPrice: '$200', name: 'VitaminB12', description: '30 capsules', discount: "50% Off" },
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
        contentContainerStyle={{ columnGap: SIZES.medium }}
        horizontal
      />
    </View>
  )
}

export default FavouritePicks