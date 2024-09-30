import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FlexBox from "./components/flex.box";
import AntDesign from "@expo/vector-icons/AntDesign";

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
    if (!todo) {
      Alert.alert("Lỗi input todo", "Không được để trống", [
        // {
        //   text: 'Hủy',
        //   onPress: () => console.log('Cancel Pressed'),
        //   style: 'cancel'
        // },
        { text: "Xác nhận", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    setListTodo([...listTodo, { id: randomInteger(2, 10000), name: todo }]);
    setTodo("");
  };

  const handleDeleteTodo = (id: number) => {
    const newTodos = listTodo.filter((item) => item.id !== id);
    setListTodo(newTodos);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Text style={styles.header}>To Do App</Text>
        {/* form  */}
        <View style={styles.form}>
          <TextInput
            value={todo}
            style={styles.todoInput}
            onChangeText={(value) => setTodo(value)}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
            <Text style={styles.buttonText}>Add to do</Text>
          </TouchableOpacity>
        </View>
        {/* list todo */}
        <View style={styles.todo}>
          <FlatList
            keyExtractor={(item) => item.id + ""}
            data={listTodo}
            renderItem={({ item }) => {
              return (
                <View>
                  <View style={styles.groupTodo}>
                    <Text style={styles.todoItem}>{item.name}</Text>
                    <Pressable
                      style={({ pressed }) => [
                        { opacity: pressed ? 0.5 : 1.0 },
                      ]}
                      onPress={() => handleDeleteTodo(item.id)}
                    >
                      <AntDesign name="close" size={24} color="black" />
                    </Pressable>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },

  header: {
    backgroundColor: "green",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 40,
  },

  form: {
    marginBottom: 10,
  },
  groupTodo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 20,
    marginHorizontal: 20,
    padding: 10,
  },
  todo: {
    flex: 1,
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
  },
  body: {
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#841584", // Màu nền của button
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff", // Màu chữ của button
    fontSize: 16,
  },
});
