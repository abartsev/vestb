import React from 'react';
import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContactItem } from '../../components/ContactItem';
import type { IContact } from '../../types/contacts';
import { getStyles } from './styles';
import { useTheme } from '../../contexts';

// Временные статичные данные
const MOCK_CONTACTS: IContact[] = [
  {
    id: '1',
    name: 'Анна Иванова',
    status: 'В сети',
  },
  {
    id: '2',
    name: 'Петр Смирнов',
    status: 'Был(а) вчера',
  },
  {
    id: '3',
    name: 'Мария Козлова',
    status: 'Занят(а)',
  },
  {
    id: '4',
    name: 'Дмитрий Волков',
    status: 'В сети',
  },
  {
    id: '5',
    name: 'Елена Соколова',
    status: 'Был(а) 2 часа назад',
  },
];

export const ContactsScreen: React.FC = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const handleChatPress = (contact: IContact) => {
    console.log('Открыть чат с:', contact.name);
    // Здесь позже будет переход на экран чата
  };

  const handleVideoPress = (contact: IContact) => {
    console.log('Видеозвонок:', contact.name);
    // Здесь позже будет открытие Jitsi
  };

  const renderItem = ({ item }: { item: IContact }) => (
    <ContactItem
      contact={item}
      onChatPress={handleChatPress}
      onVideoPress={handleVideoPress}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Контакты</Text>
      <FlatList
        data={MOCK_CONTACTS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
