import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "../actions/todoActions";

const TodoList = ({ todos, addTodo, removeTodo }) => {
  console.log("addTodo function:", JSON.stringify(addTodo));
  console.log("removeTodo function:", removeTodo);

  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      addTodo({
        id: Math.random(),
        text: text.trim(),
      });
      setText("");
    }
  };

  const handleRemoveTodo = (todo) => {
    removeTodo({
      id: todo.id,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <Button title="Add" onPress={() => handleAddTodo()} />
      {console.log(todos.todos)}
      {todos.todos.map((todo, index) => (
        <View key={index} style={styles.todoItem}>
          <Text style={styles.todoText}>{todo.text}</Text>
          <Button title="X" onPress={() => handleRemoveTodo(todo)} />
        </View>
      ))}
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log("state:", state.todos.todos); // check if state is being mapped correctly
  return {
    todos: state.todos, // the 'todos' state property is nested in the 'todos' object
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#eee",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  todoText: {
    fontSize: 18,
    marginRight: 10,
    color: "#000",
  },
});
