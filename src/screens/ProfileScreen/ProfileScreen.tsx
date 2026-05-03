import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useTheme } from '../../contexts';
import { getStyles } from './styles';

export const ProfileScreen: React.FC = () => {
  const { theme, colors, toggleTheme } = useTheme();
  const styles = getStyles(colors);

  const handleLogout = () => {
    console.log('Выход из аккаунта');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.header}>Профиль</Text>

      {/* Аватар и имя */}
      <View style={styles.avatarSection}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>Я</Text>
        </View>
        <Text style={styles.userName}>Пользователь</Text>
        <Text style={styles.userStatus}>В сети</Text>
      </View>

      {/* Настройки */}
      <View style={styles.section}>
        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <Icon name="dark-mode" size={24} color={colors.text} />
            <Text style={styles.settingText}>Тёмная тема</Text>
          </View>
          <Switch
            value={theme === 'dark'}
            onValueChange={toggleTheme}
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor={colors.backgroundDark}
          />
        </View>

        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <Icon name="notifications" size={24} color={colors.text} />
            <Text style={styles.settingText}>Уведомления</Text>
          </View>
          <Text style={styles.settingValue}>Включены</Text>
        </View>

        <View style={[styles.settingRow, { borderBottomWidth: 0 }]}>
          <View style={styles.settingLeft}>
            <Icon name="language" size={24} color={colors.text} />
            <Text style={styles.settingText}>Язык</Text>
          </View>
          <Text style={styles.settingValue}>Русский</Text>
        </View>
      </View>

      {/* Кнопка выхода */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Icon name="logout" size={20} color={colors.textLight} />
        <Text style={styles.logoutText}>Выйти</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
