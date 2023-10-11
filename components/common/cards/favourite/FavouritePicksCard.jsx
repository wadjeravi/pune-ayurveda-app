import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './favouritePicksCard.style'

const FavouritePicksCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}>
      <Image source={item.uri}
        style={{
          width: 100,
          height: 100,
        }}
        resizeMode="contain" />
      <View style={{ marginBottom: 20 }}>
        {/* Add space between add button view and image */}
      </View>
      <View style={styles.pricesView}>
        <Text style={styles.favouritePrices}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => handleImagePress(item)}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default FavouritePicksCard