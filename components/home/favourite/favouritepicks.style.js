import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    padding:10,
    marginTop: SIZES.medium,
    backgroundColor:'lightyellow'
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius:10,
    borderColor:'red',
    borderWidth:1,
    backgroundColor: 'white', 
    padding: 5, 
  },
  pricesView:{
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  favouritePrices:{
    color:'black'
  },
  addButtonText: {
    color: 'red', 
  },
});

export default styles;
