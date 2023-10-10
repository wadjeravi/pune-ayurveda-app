import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, FavouritePicks,Popularjobs, ScreenHeaderBtn, Welcome } from '../components'
// import FavouritePicks from '../components/home/favourite/FavouritePicks';


const Home = () => {
  const router = useRouter();
  const width = 50;
  const height = 50;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen options={{ 
        headerStyle: { backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension="60%" />
        ),
        headerTitle: ""
    }}/>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex:1, padding: SIZES.medium}}>
        <Welcome></Welcome>
        <Popularjobs></Popularjobs>
        <FavouritePicks></FavouritePicks>
        <Nearbyjobs />
      </View>

    </ScrollView>
    </SafeAreaView>
  )
}

export default Home;