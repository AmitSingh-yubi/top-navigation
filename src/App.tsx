import { View, StyleSheet, Text } from "react-native";
const App = () => {
  return (
    <View>
      <Text style={styles.highlight}>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: "700",
  },
});

export default App;
