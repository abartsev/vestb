import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../contexts/ThemeContext';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ChatsStackParamList } from '../../types/navigation';
import { getStyles } from './styles';

type ChatScreenRouteProp = RouteProp<ChatsStackParamList, 'ChatDetail'>;

interface Message {
  id: string;
  text: string;
  sender: 'me' | 'other';
  time: string;
}

export const ChatScreen: React.FC = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const route = useRoute<ChatScreenRouteProp>();
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Привет! 👋', sender: 'other', time: '12:00' },
  ]);

  console.log({ route });

  const sendMessage = () => {
    if (!inputText.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: 'me',
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setMessages(prev => [...prev, newMsg]);
    setInputText('');
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === 'me' ? styles.messageMe : styles.messageOther,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.messageList}
          inverted={false}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Сообщение..."
            placeholderTextColor={colors.textSecondary}
            multiline
          />
          <TouchableOpacity
            onPress={sendMessage}
            style={[
              styles.sendButton,
              !inputText.trim() && styles.sendButtonDisabled,
            ]}
            disabled={!inputText.trim()}
          >
            <Text style={styles.sendButtonText}>Отправить</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
