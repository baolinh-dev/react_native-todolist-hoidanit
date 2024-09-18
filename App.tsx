import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface ITodo {
  id: number;
  name: string;
}

export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todo) return;
    setListTodo([...listTodo, { id: randomInteger(2, 10000), name: todo }]);
    setTodo("");
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.header}>To Do App</Text>
      {/* form  */}
      <View style={styles.body}>
        <TextInput
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>
      {/* list todo */}
      <View style={styles.body}>
        <FlatList 
          keyExtractor={item => item.id + ""}
          data={listTodo}
          renderItem={({ item }) => {
            return <Text style={styles.todoItem}>{item.name}</Text>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "green",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 40,
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  todoInput: {
    borderWidth: 1,
    borderBlockColor: "blue",
    padding: 10,
    marginHorizontal: 15,
    margin: 15,
  },
  todoItem: {
    fontSize: 24,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  body: {
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#841584", // Màu nền của button
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff", // Màu chữ của button
    fontSize: 16,
  },
});
