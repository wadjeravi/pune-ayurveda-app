import { StyleSheet ,Dimensions} from "react-native";
import { FONT, SIZES, COLORS } from "../../../constants";
const  { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    flexDirection: 'column',
    // justifyContent: 'flex-end', 
  },
  slider: {
    height: 500,
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 150,
    resizeMode: 'cover',
    marginVertical: 10,
    marginTop: 20,
    padding: 60,
    borderRadius: 30,
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    marginTop: -320,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: 'grey',
    borderRadius: 50,
    marginHorizontal: 5,
  },
});

export default styles;