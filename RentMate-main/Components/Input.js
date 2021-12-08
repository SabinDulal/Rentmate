import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const Input = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View onPress={() => Keyboard.dismiss()}>
      <TextInput
        style={styles.textbox}
        placeholder="User Name"
        defaultValue={userName}
        textContentType="username"
      />
      <TextInput
        style={styles.textbox}
        placeholder="Password"
        defaultValue={password}
        textContentType="password"
        secureTextEntry={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textbox: {
    backgroundColor: 'white',
    width: 350,
    height: 50,
    borderRadius: 10,
    paddingLeft: 25,
    borderColor: 'black',
    marginTop: 25,
    borderStartWidth: 5,
    borderStyle: 'solid',
    fontSize: 15,
  },
});
export default Input;
