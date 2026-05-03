import { feathers } from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';

// В dev-режиме используем локальный IP твоего Mac (или localhost для симулятора)
// Для продакшена подставь домен своего VPS
const SERVER_URL = __DEV__
  ? 'http://192.168.1.100:3030' // ← замени на свой IP (получи через ifconfig)
  : 'https://api.vestapp.ru'; // ← замени на свой домен

const socket = io(SERVER_URL, {
  transports: ['websocket'],
  timeout: 10000,
});

export const feathersClient = feathers().configure(socketio(socket));

// Сервисы
export const messagesService = feathersClient.service('messages');
export const roomsService = feathersClient.service('rooms');

// Простое хранилище в памяти (временная замена AsyncStorage)
const memoryStorage: Record<string, string> = {};

// Временная аутентификация (пока нет реальной регистрации)
export const authenticateAnonymously = async (userId: string, name: string) => {
  try {
    memoryStorage.vest_user = JSON.stringify({ id: userId, name });
    console.log('User saved to memory:', { id: userId, name });
  } catch (error) {
    console.error('Auth error:', error);
  }
};

// Получить текущего пользователя (из памяти)
export const getCurrentUser = () => {
  const data = memoryStorage.vest_user;
  return data ? JSON.parse(data) : null;
};

// Инициализация гостевого пользователя при запуске
export const initGuestUser = () => {
  if (!memoryStorage.vest_user) {
    authenticateAnonymously('guest_123', 'Гость');
  }
};
