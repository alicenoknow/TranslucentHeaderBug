import {createBottomTabNavigator} from 'react-navigation-tabs';
import createNativeStackNavigator from 'react-native-screens/createNativeStackNavigator';
import {SampleScreen, PushedScreen} from './Screens';

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
            headerTranslucent: false,
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
    PushedScreen: PushedScreen,
  },
  {
    initialRouteName: 'Tabs',
  },
);
