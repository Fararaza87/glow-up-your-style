import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  return <div>Home Screen</div>;
};

const SettingsScreen = () => {
  return <div>Settings Screen</div>;
};

export default RootNavigator;
