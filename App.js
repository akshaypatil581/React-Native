import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {uuid} from 'uuidv4';

const App = () => {
  

  const [items, setItems] = useState([
    {id: Math.random(), text: 'Milk' },
    {id: Math.random(), text: 'Eggs' },
    {id: Math.random(), text: 'Bread' },
    {id: Math.random(), text: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem />
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  }
});

export default App;