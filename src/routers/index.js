import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Config
import TabConfig from '../config/Tab';
import HomeIcon from '../config/Screen/Home';
import ProfileIcon from '../config/Screen/Profile';
import { IconMore, IconSearch, Avatar } from '../config/Screen';

// Pages
import Home from '../pages/Home';
import Profile from '../pages/Profile';

function Router() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer initialRouteName="Home">
      <Tab.Navigator tabBarOptions={TabConfig}>
        <Tab.Screen
          component={Home}
          name="Home"
          options={{ tabBarIcon: ({ focused }) => HomeIcon(focused) }}
        />
        <Tab.Screen
          component={Home}
          name="Jobs"
          options={{ tabBarIcon: ({ focused }) => ProfileIcon(focused) }}
        />

        <Tab.Screen
          name="works"
          component={Home}
          options={{ tabBarIcon: ({ focused }) => IconMore(focused) }}
        />

        <Tab.Screen
          name="Search"
          component={Home}
          options={{ tabBarIcon: ({ focused }) => IconSearch(focused) }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ tabBarIcon: ({ focused }) => Avatar(focused) }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
