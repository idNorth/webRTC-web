import {
  GET_CHAT_START,
  GET_CHAT_SUCCESS,
  GET_CHAT_FAIL,

  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,

  CREATE_CHAT_START,
  CREATE_CHAT_SUCCESS,
  CREATE_CHAT_FAIL,

  CLEAR_MESSAGES,
} from './types';

export const createChatAction = () => ({
  types: [CREATE_CHAT_START, CREATE_CHAT_SUCCESS, CREATE_CHAT_FAIL],
  promise: (api) => api.post('/chat/create'),
});

export const getChatAction = (chatId) => ({
  types: [GET_CHAT_START, GET_CHAT_SUCCESS, GET_CHAT_FAIL],
  promise: (api) => api.get(`/chat/get/${chatId}`),
});

export const getMessagesAction = (chatId) => ({
  types: [GET_MESSAGES_START, GET_MESSAGES_SUCCESS, GET_MESSAGES_FAIL],
  promise: (api) => api.get(`/chat/getMessages/${chatId}`),
});

export const uploadMessagesAction = () => async (dispatch) => dispatch({ type: CLEAR_MESSAGES });

