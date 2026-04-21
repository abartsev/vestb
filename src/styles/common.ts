import { StyleSheet } from 'react-native';
import { ThemeColors } from '../types/theme';

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
};

export const getTypography = (colors: ThemeColors) =>
  StyleSheet.create({
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.text,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      color: colors.text,
    },
    body: {
      fontSize: 16,
      fontWeight: '500',
      color: colors.text,
    },
    caption: {
      fontSize: 14,
      color: colors.textSecondary,
    },
    small: {
      fontSize: 12,
      color: colors.textSecondary,
    },
  });

export const getLayout = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    screenHeader: {
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.md,
      paddingBottom: spacing.sm,
    },
    separator: {
      height: 1,
      backgroundColor: colors.border,
    },
  });
