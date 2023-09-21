import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Styles from "../styles/global";
const Card = (props) => {
  return (
    <View style={Styles.container}>
      <View style={styles.flex}>
        <Text style={styles.textBox}>Saadi</Text>
        <Text style={styles.textBox}>Saadi</Text>
        <Text style={styles.textBox}>Saadi</Text>
        <Text style={styles.textBox}>Saadi</Text>
        <Text style={styles.textBox}>Saadi</Text>
        <Text style={styles.textBox}>Saadi</Text>
        <Text style={styles.textBox}>Saadi</Text>
        <Text style={styles.textBox}>Saadi</Text>
        <Text style={styles.textBox}>Saadi</Text>
        <Text style={styles.textBox}>Saadi</Text>
        <Text style={styles.textBox}>Saadi</Text>
        <Text style={styles.textBox}>Saadi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

   
  flex: {
    width: '100%',
    backgroundColor:'white',
    padding: 10
  },
  textBox: {
    color: 'white',
    backgroundColor: 'gray',
    marginTop: 2,
    marginBottom: 2,
    padding: 12,
    textAlign: 'center',
  },
});

export default Card;
