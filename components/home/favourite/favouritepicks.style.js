import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: 16,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    padding:10,
    marginTop: SIZES.medium,
    backgroundColor:'white'
  }
});

export default styles;
