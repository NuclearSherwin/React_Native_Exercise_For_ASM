import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import Database from '../Database';

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleDeleteTodo = async (id) => {
    await Database.deleteTodo(id);
    const data = await Database.getTodos();
    setTodos(data);
  };

  const handleSearch = async (title) => {
    const data = await Database.getTodosByTitle(title);
    setSearchResults(data);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={() => handleSearch(searchText)}
      />
      <Text style={styles.resultText}>Results</Text>
      <FlatList
        data={searchResults}
        renderItem={({ item }) => <Text style={styles.result}>{item.title} | {item.description}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  result: {
    fontSize: 18,
    marginBottom: 8,
  },
  resultText: {
    fontSize: 24,
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
  }
});

export default SearchPage;
