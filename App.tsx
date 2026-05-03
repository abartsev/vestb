import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/contexts';
import { TabNavigator } from './src/navigation/TabNavigator';

export type RootTabParamList = {
  Контакты: undefined;
  Чаты: undefined;
  Профиль: undefined;
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
