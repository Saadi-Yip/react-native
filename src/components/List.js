import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';


const List = ({ user }) => {
    return (
        <View>

            <Text style={styles.item}>
                {user.name}
            </Text>


        </View>
    )
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

});
export default List