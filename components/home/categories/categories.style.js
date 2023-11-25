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
    fontSize: 16,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "23%", // Adjust this width to allow for space between cards
    // height:"60",
    aspectRatio: 1, // Maintain a 1:1 aspect ratio for the cards
    marginBottom: 5,
    marginTop:5,
    marginRight: "2%", // Add margin for spacing between cards
    backgroundColor: "#F7EDF8",
    borderRadius: 10,
    alignItems: "center",
    overflow:"hidden"
  },
  cardImage: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
  cardName: {
    marginTop: 8,
    fontSize: 12,
  },
});

export default styles;
