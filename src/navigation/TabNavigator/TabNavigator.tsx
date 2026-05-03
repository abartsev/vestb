import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../../contexts/ThemeContext';
import { ContactsScreen } from '../../screens/ContactsScreen';
import { ProfileScreen } from '../../screens/ProfileScreen';
import { ChatsStackNavigator } from '../ChatsStackNavigator';

export type RootTabParamList = {
  Контакты: undefined;
  Чаты: undefined;
  Профиль: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigator: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.backgroundDark,
        },
      }}
    >
      <Tab.Screen name="Контакты" component={ContactsScreen} options={{}} />

      <Tab.Screen name="Чаты" component={ChatsStackNavigator} options={{}} />

      <Tab.Screen name="Профиль" component={ProfileScreen} options={{}} />
    </Tab.Navigator>
  );
};
