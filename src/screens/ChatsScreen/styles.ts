import { StyleSheet } from 'react-native';
import type { ThemeColors } from '../../types/theme';
import { spacing } from '../../styles/common';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    chatItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    avatarPlaceholder: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    avatarText: {
      fontSize: 20,
      fontWeight: '600',
      color: colors.textLight,
    },
    chatInfo: {
      flex: 1,
    },
    chatHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 4,
    },
    chatName: {
      fontSize: 16,
      fontWeight: '500',
      color: colors.text,
    },
    timeText: {
      fontSize: 12,
      color: colors.textSecondary,
    },
    lastMessage: {
      fontSize: 14,
      color: colors.textSecondary,
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      fontSize: 16,
      color: colors.danger,
      marginBottom: 16,
    },
    retryButton: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: colors.primary,
      borderRadius: 8,
    },
    retryText: {
      color: colors.textLight,
      fontWeight: '600',
    },
    listContent: {
      paddingBottom: 16,
    },
    emptySubtext: {
      fontSize: 14,
      color: colors.textSecondary,
      marginTop: 8,
    },
    container: {
      flex: 1,
      backgroundColor: colors.backgroundDark,
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.text,
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.md,
      paddingBottom: spacing.sm,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 40,
    },
    emptyText: {
      marginTop: 16,
      fontSize: 18,
      fontWeight: '500',
      color: colors.textSecondary,
    },
    headerButton: {
      marginRight: 16,
    },
  });
