import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import Amplify, {API, graphqlOperation} from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';
import {creatTodoList} from './src/graphql/mutations';
import {listTodoLists} from './src/graphql/queries';

const initialState = {name: '', description: ''};
Amplify.configure(awsconfig);
const App = () => {
  const [formState, setFormState] = useState(initialState);
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    fetchTodoLists();
  }, []);

  function setInput(key, value) {
    setFormState({...formState, [key]: value});
  }

  async function fetchTodoLists() {
    try {
      const todoListsData = await API.graphql(graphqlOperation(listTodoLists));
      const newTodoLists = todoListsData.data.listTodoLists.items;
      setTodoLists(newTodoLists);
    } catch (err) {
      console.log('error fetching todoLists');
    }
  }

  async function addTodoList() {
    try {
      const todoList = {...formState};
      setTodoLists([...todoLists, todoList]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(creatTodoList, {input: todoList}));
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(val) => setInput('name', val)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <TextInput
        onChangeText={(val) => setInput('description', val)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <Button title="Create Todo List" onPress={addTodoList} />
      {todoLists.map((todoList, index) => (
        <View key={todoList.id ? todoList.id : index} style={styles.todoList}>
          <Text style={styles.todoListName}>{todoList.name}</Text>
          <Text>{todoList.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  todoList: {marginBottom: 15},
  input: {height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8},
  todoListName: {fontSize: 18},
});

export default withAuthenticator(App);
