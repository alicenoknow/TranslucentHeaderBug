import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export class SampleScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sample Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('PushedScreen')}>
          <Text>Push screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export class PushedScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pushed Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 24,
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'pink',
  },
});
