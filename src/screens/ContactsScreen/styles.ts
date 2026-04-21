import { StyleSheet } from 'react-native';
import type { ThemeColors } from '../../types/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.text,
      paddingHorizontal: 16,
      paddingTop: 12,
      paddingBottom: 8,
    },
    list: {
      paddingBottom: 16,
    },
  });
