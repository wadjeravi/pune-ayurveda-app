import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 250,
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
    justifyContent:"center",
    alignItems:"center",
    bottom: 5,
    right: 5,
    borderRadius:8,
    borderColor:'red',
    borderWidth:1,
    backgroundColor: 'white', 
    padding: 10, 
    width:80,
    height:40
  },
  originalPriceView:{
    position: 'absolute',
    bottom: 20,
    left: 5,
  },
  discountPriceView:{
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  originalPrices:{
    color:'black',
    textDecorationLine:'line-through'
  },
  discountPrices:{
    color:'black',
  },
  addButtonText: {
    color: 'red', 
    fontWeight:'bold',
    fontSize:15
  },
  discountView: {
    backgroundColor: 'purple',
    padding: 2,
    borderTopLeftRadius: SIZES.medium,
    borderBottomRightRadius:10,
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'absolute',
    top: 0, 
    left: 0,
  },
  discountText: {
    color: 'white',
  },
});

export default styles;
