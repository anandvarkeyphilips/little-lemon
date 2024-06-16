import { useState } from "react";
import { Button, ScrollView, StyleSheet, TextInput, View } from "react-native";
import LittleLemonHeader from "../components/LittleLemonHeader";
import LittleLemonFooter from "../components/LittleLemonFooter";

export default function Onboarding() {
  const [firstName, onChangeFirstName] = useState("");
  const [lasttName, onChangeLastName] = useState("");
  return (
    <ScrollView style={styles.container}>
      <LittleLemonHeader />
      <TextInput
        style={styles.inputBox}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.inputBox}
        value={lasttName}
        onChangeText={onChangeLastName}
        placeholder="Last Name"
      />
      <LittleLemonFooter />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#495E57'
    },
    headerText: {
      padding: 40,
      fontSize: 30,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    regularText: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    inputBox: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      fontSize: 16,
      borderColor: '#EDEFEE',
      backgroundColor: '#EDEFEE',
    },
  });
