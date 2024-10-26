/**
 * Enhanced React Native Form
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Alert,
  ScrollView
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');

  const handleClear = () => {
    setName('');
    setEmail('');
    setAge('');
    setPhone('');
  };

  const handleSubmit = () => {
    if (!name || !email || !age || !phone) {
      Alert.alert('Error', 'Please fill out all fields');
    } else {
      Alert.alert('Form Submitted', `Name: ${name}\nEmail: ${email}\nAge: ${age}\nPhone: ${phone}`);
      handleClear();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>User Information Form</Text>
      
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your email"
        value={email}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your age"
        value={age}
        keyboardType="numeric"
        onChangeText={(text) => setAge(text)}
      />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your phone number"
        value={phone}
        keyboardType="phone-pad"
        onChangeText={(text) => setPhone(text)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Clear Form" onPress={handleClear} color="#ff6347" />
        <Button title="Submit" onPress={handleSubmit} color="#4682b4" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4682b4',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    color: '#333',
  },
  textInput: {
    fontSize: 16,
    color: '#000',
    borderWidth: 1,
    borderColor: '#4682b4',
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  }
});

export default App;
