import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './favouritePicksCard.style'
import { FONT, SIZES } from '../../../../constants'

const FavouritePicksCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}>
      <Image source={item.uri}
        style={{
          width: 200,
          height: 200,
        }}
        resizeMode="contain" />
      <View style={{ marginBottom: 20 }}>
        {/* Add space between add button view and image */}
      </View>
      <View style={styles.discountView}>
        <Text style={styles.discountText}>{item.discount}</Text>
      </View>
      <View style={{ alignItems: 'left', justifyContent: 'center' }}>
        <Text style={{fontSize:SIZES.large}}>{item.name}</Text>
        <Text style={{fontSize:SIZES.large}}>{item.description}</Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        {/* Add space between name view and addbutton */}
      </View>
      <View style={styles.originalPriceView}>
        <Text style={styles.originalPrices}>{item.originalPrice}</Text>
      </View>
      <View style={styles.discountPriceView}>
        <Text style={styles.discountPrices}>{item.discountPrice}</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => handleImagePress(item)}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default FavouritePicksCard