import { StatusBar } from "expo-status-bar";
import { View, StyleSheet,Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.city}>
        <Text>Seoul</Text>
      </View>
      <View style={styles.weather}></View>
      <View style={styles.day}>
        <Text style={styles.temp}>27</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city :{
    flex:1,
    marginTop:20,
    alignItems:"center"
  },
  cityName : {
    fontSize: 68,
    fontWeight: "500"
  },
  weather: {
    flex:3,
  },
  day :{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  temp: {
    fontSize:178
  },
  description: {
    fontSize:60
  }
});
