
import { FlatList, StyleSheet, View, Text, ScrollView } from 'react-native';
import { useState } from 'react';
import Card from './src/components/Card';
import Form from './src/components/Form';
import List from './src/components/List';
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    username: "johndoe123",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    username: "janesmith456",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    username: "alicej",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    username: "bobbrown789",
  },
  {
    id: 5,
    name: "Eva Wilson",
    email: "eva.wilson@example.com",
    username: "evaw",
  },
  {
    id: 6,
    name: "David Lee",
    email: "david.lee@example.com",
    username: "davidl",
  },
  {
    id: 7,
    name: "Linda Martinez",
    email: "linda.martinez@example.com",
    username: "lindam",
  },
  {
    id: 8,
    name: "Michael Taylor",
    email: "michael.taylor@example.com",
    username: "michaelt",
  },
  {
    id: 9,
    name: "Olivia Anderson",
    email: "olivia.anderson@example.com",
    username: "oliviaa",
  },
  {
    id: 10,
    name: "William White",
    email: "william.white@example.com",
    username: "williamw",
  },
  {
    id: 11,
    name: "John Doe",
    email: "john.doe@example.com",
    username: "johndoe123",
  },
  {
    id: 12,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    username: "janesmith456",
  },
  {
    id: 13,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    username: "alicej",
  },
  {
    id: 14,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    username: "bobbrown789",
  },
  {
    id: 15,
    name: "Eva Wilson",
    email: "eva.wilson@example.com",
    username: "evaw",
  },
];

export default function App() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      {/* <Form/> */}
      {/* <Card name = {name} setName = {setName}/> */}
      {/* <FlatList data={users}
        renderItem={({ item }) => <Text style = {styles.item}>{item.name}</Text>}
        keyExtractor={item =>item.id}
      /> */}
      <ScrollView>
        {users && users.map((user) => {
          return <List user={user} key={user.id} />
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: 'white',
    backgroundColor: 'blue',
    borderColor: 'yellow',
    borderWidth: 1,
    margin: 10
  },
  container: {
    marginTop: 50,
    overflow: 'scroll',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
