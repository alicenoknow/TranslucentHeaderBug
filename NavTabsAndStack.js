import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

const Stack = createStackNavigator();
export const Tab = createBottomTabNavigator({
  Zero: DetailsScreen,
  One: DetailsScreen,
});

class DetailsScreen extends React.Component {
  render() {
    const colors = [
      'snow',
      'cornsilk',
      'papayawhip',
      'bisque',
      'peachpuff',
      'orange',
      'coral',
      'orangered',
      'red',
    ];

    const index = this.route.params?.index ? this.route.params?.index : 0;

    const currentColor =
      index < colors.length ? colors[index] : colors[colors.length - 1];
    return (
      <SafeAreaView
        style={{...styles.container, backgroundColor: currentColor}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.navigation.push('Details', {index: index + 1})}>
          <Text>Add screen</Text>
        </TouchableOpacity>
        {index !== 0 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.navigation.pop()}>
            <Text>Go back</Text>
          </TouchableOpacity>
        ) : null}
      </SafeAreaView>
    );
  }
}

const DetailsScreenWithTranslucent = ({navigation, route}) => {
  const colors = [
    'snow',
    'cornsilk',
    'papayawhip',
    'bisque',
    'peachpuff',
    'orange',
    'coral',
    'orangered',
    'red',
  ];

  const index = route.params?.index ? route.params?.index : 0;

  const currentColor =
    index < colors.length ? colors[index] : colors[colors.length - 1];

  return (
    <SafeAreaView style={{...styles.container, backgroundColor: currentColor}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('Details', {index: index + 1})}>
        <Text>Add screen</Text>
      </TouchableOpacity>
      {index !== 0 ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.pop()}>
          <Text>Go back</Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

const createStack = ({navigation, route}) => {
  return <Stack.Screen name="Details" component={DetailsScreen} />;
};

const createStackTranslucent = ({navigation, route}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Details" component={DetailsScreenWithTranslucent} />
    </Stack.Navigator>
  );
};

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({navigation}) => {
        const index = navigation.getState().index;

        switch (index) {
          case 0:
            return {
              headerTitle: 'Not Translucent',
              headerStyle: {
                backgroundColor: 'pink',
              },
              headerTranslucent: false,
              headerHideShadow: true,
              headerTopInsetEnabled: false,
            };
          case 1:
            return {
              headerTitle: 'Translucent',
              headerShown: true,
              headerStyle: {
                backgroundColor: '#00000000',
              },
              headsTranslucent: true,
              hideShadow: true,
              headerTopInsetEnabled: false,
            };
        }
        return {
          headerTitle: 'Nope',
        };
      }}>
      <Tab.Screen name="not translucent" component={DetailsScreen} />
      <Tab.Screen name="translucent" component={DetailsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
  },
});

// export default MyStack;
