import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../types/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundDark,
    },
    flex: {
      flex: 1,
    },
    messageList: {
      paddingVertical: 16,
    },
    messageBubble: {
      padding: 12,
      borderRadius: 16,
      marginVertical: 4,
      marginHorizontal: 16,
      maxWidth: '75%',
    },
    messageMe: {
      alignSelf: 'flex-end',
      backgroundColor: colors.primary,
    },
    messageOther: {
      alignSelf: 'flex-start',
      backgroundColor: colors.card,
    },
    messageText: {
      color: colors.text,
      fontSize: 16,
    },
    messageTime: {
      color: colors.textSecondary,
      fontSize: 11,
      marginTop: 4,
    },
    inputContainer: {
      flexDirection: 'row',
      padding: 12,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      backgroundColor: colors.backgroundDark,
      alignItems: 'flex-end',
    },
    textInput: {
      flex: 1,
      backgroundColor: colors.card,
      borderRadius: 20,
      paddingHorizontal: 16,
      paddingVertical: 10,
      color: colors.text,
      fontSize: 16,
      maxHeight: 100,
    },
    sendButton: {
      marginLeft: 8,
      backgroundColor: colors.primary,
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      justifyContent: 'center',
    },
    sendButtonDisabled: {
      backgroundColor: colors.card,
    },
    sendButtonText: {
      color: '#fff',
      fontWeight: '600',
    },
  });
