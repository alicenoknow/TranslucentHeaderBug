import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import createNativeStackNavigator from 'react-native-screens/createNativeStackNavigator';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class SampleScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sample Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('NextScreen', {index: 1})}>
          <Text>Add screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class NextScreen extends React.Component {
  render() {
    const index = this.props.navigation.getParam('index');
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Screen {JSON.stringify(index)}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.push('NextScreen', {index: index + 1})
          }>
          <Text>Add screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    First: SampleScreen,
    Second: SampleScreen,
  },
  {
    navigationOptions: ({navigation}) => {
      const index = navigation?.state?.index;
      switch (index) {
        case 0:
          return {
            title: 'Not Translucent',
            headerStyle: {
              backgroundColor: 'pink',
            },
            transparent: false,
          };
        case 1:
          return {
            title: 'Translucent',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTranslucent: true,
          };
      }
      return {};
    },
  },
);

export const AppNavigator = createNativeStackNavigator(
  {
    Tabs: TabNavigator,
    NextScreen: NextScreen,
  },
  {
    initialRouteName: 'Tabs',
  },
);

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
