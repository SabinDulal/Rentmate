import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import Terms from './Terms';
const SignUp = () => {
  return (
    <View style={{ backgroundColor: '#0BC4C4', height: '100%' }}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.text}>Create Your account</Text>
          <View>
            <View style={styles.boxalign}>
              <TextInput
                style={{ ...styles.textbox, width: 160 }}
                placeholder="First Name"
              />
              <TextInput
                style={{ ...styles.textbox, width: 160 }}
                placeholder="Last Name"
              />
            </View>
            <TextInput style={styles.textbox} placeholder="Email" />
            <TextInput
              style={styles.textbox}
              placeholder="Phone"
              keyboardType="numeric"
            />
            <View style={styles.textAndBox}>
              <TextInput
                style={styles.textbox}
                placeholder="Password"
                secureTextEntry={true}
              />
              <Text style={{ color: 'grey', alignSelf: 'center' }}>
                Your Password must be at least 8 characters long.
              </Text>
            </View>

            <TextInput
              style={styles.textbox}
              placeholder=" Confirm Password"
              secureTextEntry={true}
            />
            <Terms />
            <View style={styles.button}>
              <Button title="Sign Up" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#0BC4C4',
    padding: 30,
    zIndex: 1,
  },
  scrollView: {
    marginHorizontal: 0,
    padding: 0,
    zIndex: -20,
  },
  text: {
    fontSize: 25,
    marginTop: 50,
    color: 'white',
    marginBottom: 25,
  },
  textbox: {
    backgroundColor: 'white',
    width: 350,
    maxWidth: 400,
    height: 50,
    borderRadius: 10,
    paddingLeft: 25,
    borderColor: 'black',
    marginTop: 25,
    borderStartWidth: 5,
    borderStyle: 'solid',
    fontSize: 15,
  },
  boxalign: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  textAndBox: {
    marginBottom: -22,
  },
  button: {
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
    fontSize: 25,
  },
});
export default SignUp;
