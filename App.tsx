import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Bao Linh", age: 18 },
    { id: 2, name: "Eric", age: 17 },
    { id: 3, name: "Cantona", age: 20 },
    { id: 4, name: "John", age: 19 },
    { id: 5, name: "Mike", age: 21 },
    { id: 6, name: "Sarah", age: 22 },
    { id: 7, name: "Emma", age: 18 },
    { id: 8, name: "David", age: 20 },
    { id: 9, name: "Olivia", age: 19 },
    { id: 10, name: "Sophia", age: 17 },
    { id: 11, name: "Liam", age: 20 },
    { id: 12, name: "Noah", age: 21 },
    { id: 13, name: "Mason", age: 18 },
    { id: 14, name: "Ethan", age: 23 },
    { id: 15, name: "Ava", age: 19 },
    { id: 16, name: "Isabella", age: 20 },
    { id: 17, name: "James", age: 22 },
    { id: 18, name: "Logan", age: 18 },
    { id: 19, name: "Lucas", age: 21 },
    { id: 20, name: "Mia", age: 19 },
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "600" }}>Hello world</Text>
      <FlatList
        data={students} 
        renderItem={({ item }) => {
          return (
            <View
              style={{
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 5,
                padding: 10,
                marginBottom: 10,  
              }}
            >
              <Text>{item.id}</Text>
              <Text>{item.age}</Text>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()} // Đảm bảo id là chuỗi
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
