import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChatsScreen } from '../../screens/ChatsScreen';
import { useTheme } from '../../contexts/ThemeContext';
import { ChatScreen } from '../../screens/ChatScreen';

export type ChatsStackParamList = {
  ChatsList: undefined;
  ChatDetail: {
    chatId: string;
    chatName: string;
    contactName?: string;
    contactAvatar?: string;
  };
};

const Stack = createStackNavigator<ChatsStackParamList>();

export const ChatsStackNavigator = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: colors.backgroundDark },
      }}
    >
      <Stack.Screen
        name="ChatsList"
        component={ChatsScreen}
        options={{ title: 'Чаты' }}
      />
      <Stack.Screen
        name="ChatDetail"
        component={ChatScreen}
        options={({ route }) => ({
          title: route.params.chatName,
        })}
      />
    </Stack.Navigator>
  );
};
