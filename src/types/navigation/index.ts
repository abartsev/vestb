import type { IContact } from '../contacts';

export type RootTabParamList = {
  Контакты: undefined;
  Чаты: undefined;
  Профиль: undefined;
};

export type ChatsStackParamList = {
  ChatsList: undefined;
  ChatDetail: {
    chatId: string;
    chatName: string;
  };
};

export type ContactsStackParamList = {
  ContactsList: undefined;
  ChatScreen: { contact: IContact; roomId: string };
  VideoCall: { roomId: string; contactName: string };
};
