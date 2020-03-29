import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

const Routes = () => <NavigationContainer>
  <AppStack.Navigator screenOptions={screenOptions}>
    <AppStack.Screen name="Incidents" component={Incidents} />
    <AppStack.Screen name="Detail" component={Detail} />
  </AppStack.Navigator>
</NavigationContainer>

const screenOptions = {
  headerShown: false,
}

export default Routes;
