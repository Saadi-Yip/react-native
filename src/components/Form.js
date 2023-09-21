import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Form = () => {
    const initialFormData = {
        name: '',
        email: '',
        password: '',
    };
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log("Your name is", formData.name);
        console.log("Your email is", formData.email);
        console.log("Your password is", formData.password);

        setFormData(initialFormData);
    };

    return (
        <View style={styles.container}>
            <Text>Signup: </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter Your Name'
                value={formData.name}
                onChangeText={(text) => handleInputChange('name', text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter Your Email'
                value={formData.email}
                onChangeText={(text) => handleInputChange('email', text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter Your Password'
                value={formData.password}
                secureTextEntry={true}
                onChangeText={(text) => handleInputChange('password', text)}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 10,
        textAlign: 'center',
        alignItems: 'center',
        width: '90%',
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        fontSize: 18,
        borderWidth: 2,
        borderColor: 'gray',
        margin: 10,
        padding: 4,
        paddingLeft: 10,
        width: '90%',
    },
});

export default Form;
