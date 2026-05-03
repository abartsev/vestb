import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { getStyles } from './styles';
import { useTheme } from '../../contexts';
import { ChatsStackParamList } from '../../types/navigation';

type ChatsScreenNavigationProp = StackNavigationProp<
  ChatsStackParamList,
  'ChatsList'
>;

interface ChatRoom {
  id: string;
  name?: string;
  lastMessage?: {
    text: string;
    createdAt: string;
  };
  participants: string[];
  updatedAt: string;
}

// Временный пользователь (пока нет AsyncStorage и бэкенда)
const GUEST_USER = {
  id: 'guest_123',
  name: 'Гость',
};

export const ChatsScreen: React.FC = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const navigation = useNavigation<ChatsScreenNavigationProp>();

  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Загружаем чаты сразу после монтирования
    loadChats();
  }, []);

  const loadChats = async () => {
    try {
      setLoading(true);
      // Моковые данные (пока сервер не готов)
      setRooms([
        {
          id: '1',
          name: 'Анна Иванова',
          participants: [GUEST_USER.id, 'user1'],
          lastMessage: { text: 'Привет!', createdAt: new Date().toISOString() },
          updatedAt: new Date().toISOString(),
        },
        {
          id: '2',
          name: 'Петр Смирнов',
          participants: [GUEST_USER.id, 'user2'],
          lastMessage: {
            text: 'Как дела?',
            createdAt: new Date().toISOString(),
          },
          updatedAt: new Date().toISOString(),
        },
      ]);
    } catch (err) {
      console.error('Failed to load chats:', err);
      setError('Не удалось загрузить чаты');
    } finally {
      setLoading(false);
    }
  };

  const openChat = (room: ChatRoom) => {
    navigation.navigate('ChatDetail', {
      chatId: room.id,
      chatName: room.name || 'Чат',
    });
  };

  const renderItem = ({ item }: { item: ChatRoom }) => {
    const otherUserName = item.name || 'Чат';
    const lastMessageText = item.lastMessage?.text || 'Нет сообщений';
    const lastMessageTime = item.lastMessage?.createdAt
      ? new Date(item.lastMessage.createdAt).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
      : '';

    return (
      <TouchableOpacity style={styles.chatItem} onPress={() => openChat(item)}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>
            {otherUserName[0].toUpperCase()}
          </Text>
        </View>
        <View style={styles.chatInfo}>
          <View style={styles.chatHeader}>
            <Text style={styles.chatName}>{otherUserName}</Text>
            {lastMessageTime && (
              <Text style={styles.timeText}>{lastMessageTime}</Text>
            )}
          </View>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {lastMessageText}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={loadChats}>
          <Text style={styles.retryText}>Повторить</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Чаты</Text>
      {rooms.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon
            name="chat-bubble-outline"
            size={64}
            color={colors.textSecondary}
          />
          <Text style={styles.emptyText}>Нет активных чатов</Text>
          <Text style={styles.emptySubtext}>Начните общение с контактов</Text>
        </View>
      ) : (
        <FlatList
          data={rooms}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
};
