import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ContactsScreen } from './src/screens/ContactsScreen';
import { ChatsScreen } from './src/screens/ChatsScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { ThemeProvider } from './src/contexts';

export type RootTabParamList = {
  Контакты: undefined;
  Чаты: undefined;
  Профиль: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Контакты" component={ContactsScreen} />
            <Tab.Screen name="Чаты" component={ChatsScreen} />
            <Tab.Screen name="Профиль" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
