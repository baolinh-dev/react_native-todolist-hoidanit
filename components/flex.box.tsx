import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 40, 
    justifyContent: "center",  
    flex: 1,
    borderWidth: 1, 
    borderColor: "orange"
  },
  item1: {
    backgroundColor: "violet",
    padding: 20,   

  },
  item2: {
    backgroundColor: "lightblue",
    padding: 20, 
 
  },
  item3: {
    backgroundColor: "lightgreen",
    padding: 20,   

  },
  item4: {
    backgroundColor: "lightcoral",
    padding: 20,

  },
  item5: {
    backgroundColor: "lightgoldenrodyellow",
    padding: 20, 
 
  },
});

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Text>item 1</Text>
      </View>
      <View style={styles.item2}>
        <Text>item 2</Text>
      </View>
      <View style={styles.item3}>
        <Text>item 3</Text>
      </View>
      <View style={styles.item4}>
        <Text>item 4</Text>
      </View>
      <View style={styles.item5}>
        <Text>item 5</Text>
      </View>
    </View>
  );
};

export default FlexBox;
