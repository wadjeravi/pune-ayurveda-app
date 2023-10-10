import { useState} from 'react'
import { View, Image ,Text, TouchableOpacity, FlatList,  ScrollView} from 'react-native'

import styles from './favouritepicks.style'
import img1 from '../../../assets/images/vitaminB12.jpg';
import img2 from '../../../assets/images/herbalance.jpg';
import img3 from '../../../assets/images/greenTea.jpg'
import img4 from '../../../assets/images/vitaminB12.jpg'
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
        <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.cardsContainer}>
        <FlatList 
          data={staticImages}
          renderItem={({ item }) => (
            
            <View style={{position:'relative'}}>
              <TouchableOpacity onPress={() => handleImagePress(item)}>
                <Image source={item.uri} style={{ width: 100, height: 100, marginRight: SIZES.medium}} />
              </TouchableOpacity>
              <View style={{ marginBottom: 50 }}>
                {/* Add space between add button view and image */}
              </View>
              <View style={styles.pricesView}>
                <Text style={styles.favouritePrices}>{item.price}</Text>
              </View>
              <TouchableOpacity style={styles.addButton} onPress={() => handleImagePress(item)}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </ScrollView>
    </View>
  )
}

export default FavouritePicks