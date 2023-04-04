// Redux/components/TodoList.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "../actions/todoActions";

const TodoList = ({ todos, addTodo, removeTodo }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      addTodo({
        id: Math.floor(Math.random() * 99999),
        text: text.trim(),
      });
      setText("");
    }
  };

  const handleRemoveTodo = (id) => {
    removeTodo(id);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#0049B7"} />
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        value={text}
        onChangeText={(text) => setText(text)}
        placeholderTextColor="#B8B8B8"
      />

      <Button title="Add" onPress={() => handleAddTodo()} color="#0049B7" />
      {todos.map((todo) => (
        <View key={todo.id} style={styles.todoItem}>
          <Text style={styles.todoText}>{todo.text}</Text>
          <TouchableOpacity
            onPress={() => handleRemoveTodo(todo.id)}
            activeOpacity={0.9}
            style={{
              backgroundColor: "#FF1D58",

              width: 30,
              height: undefined,
              aspectRatio: 1,
              borderRadius: 999,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                marginTop: -4,
                color: "#FEFEFE",
              }}
            >
              ✖
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodo: (id) => dispatch(removeTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0049B7",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#444444",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
    color: "#0049B7",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  todoText: {
    fontSize: 18,
    marginRight: 10,
    color: "#0049B7",
  },
});
