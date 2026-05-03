import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../types/theme';
import { spacing } from '../../styles/common';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
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
    section: {
      backgroundColor: colors.surface,
      borderRadius: 12,
      marginHorizontal: spacing.lg,
      marginTop: spacing.lg,
      overflow: 'hidden',
    },
    settingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    settingLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.md,
    },
    settingText: {
      fontSize: 16,
      color: colors.text,
    },
    settingValue: {
      fontSize: 14,
      color: colors.textSecondary,
    },
    avatarSection: {
      alignItems: 'center',
      paddingVertical: spacing.xl,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: spacing.md,
    },
    avatarPlaceholder: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: spacing.md,
    },
    avatarText: {
      fontSize: 32,
      fontWeight: '600',
      color: colors.textLight,
    },
    userName: {
      fontSize: 20,
      fontWeight: '600',
      color: colors.text,
      marginBottom: spacing.xs,
    },
    userStatus: {
      fontSize: 14,
      color: colors.textSecondary,
    },
    logoutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: spacing.lg,
      marginTop: spacing.xl,
      paddingVertical: spacing.md,
      backgroundColor: colors.danger,
      borderRadius: 12,
      gap: spacing.sm,
    },
    logoutText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.textLight,
    },
  });
