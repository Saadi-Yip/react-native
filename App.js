 
import { StyleSheet, View } from 'react-native'; 
import { useState } from 'react';
import Card from './src/components/Card';
 

export default function App() {
  const [name, setName] = useState('');
  
  return (
     <View style={styles.container}> 
      <Card name = {name} setName = {setName}/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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
