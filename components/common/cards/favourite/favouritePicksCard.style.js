import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 150,
    padding: SIZES.xLarge,
    backgroundColor: 'white',
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    elevation: 5, // Add elevation for shadow
    shadowColor: 'black', // Color of the shadow
    shadowOffset: { width: 0, height: 2 }, // Offset of the shadow
    shadowOpacity: 0.3, // Opacity of the shadow
    shadowRadius: 3, // Radius of the shadow
  }),
  addButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    borderRadius:10,
    borderColor:'red',
    borderWidth:1,
    backgroundColor: 'white', 
    padding: 5, 
  },
  pricesView:{
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  favouritePrices:{
    color:'black'
  },
  addButtonText: {
    color: 'red', 
  },
});

export default styles;
