import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}> 
      <View>
        <Text style={styles.header}>xinchao</Text>
      </View>
      <Text style={styles.hello1}>Xin chào các bạn 1</Text>
      <Text>Xin chào các bạn 2 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }, 
  hello1: {  
    color: "red",  
    fontSize: 30, 
    borderWidth: 1, 
    borderColor: "blue", 
    padding: 10
  }, 
  header: { 
    fontSize: 30, 
    fontWeight: "600"
  }
});
