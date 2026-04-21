import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import type { IContact } from '../../types/contacts';
import { useTheme } from '../../contexts';
import { getStyles } from './styles';

interface ContactItemProps {
  contact: IContact;
  onChatPress: (contact: IContact) => void;
  onVideoPress: (contact: IContact) => void;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  onChatPress,
  onVideoPress,
}) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {contact.avatar ? (
          <Image source={{ uri: contact.avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>{getInitials(contact.name)}</Text>
          </View>
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{contact.name}</Text>
        {contact.status && (
          <Text style={styles.status} numberOfLines={1}>
            {contact.status}
          </Text>
        )}
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onChatPress(contact)}
        >
          <Icon name="chat-bubble-outline" size={24} color={colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.videoButton]}
          onPress={() => onVideoPress(contact)}
        >
          <Icon name="videocam" size={24} color={colors.success} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
