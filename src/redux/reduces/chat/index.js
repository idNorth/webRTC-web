import { createReducer } from '../../../helpers/methods';

const initialState = {
  messages: [],
  total: 0,

  chat: null,

  isLoadingGetChat: false,
  isLoadingCreateChat: false,
  isLoadingGetMessages: false,
  isLoadingUploadMessages: false,
};

const getChatSuccess = (state, { result }) => {
  return {
    ...state,
    chat: result.data.data.chat,
    isLoadingGetChat: false,
  }
}

const getMessagesSuccess = (state, { result }) => {
  return {
    ...state,
    messages: result.data.data.messages,
    total: result.data.data.total,
    isLoadingGetMessages: false,
  }
}

const chatReducer = createReducer(initialState,
  {
    CREATE_CHAT_START: (state) => ({ ...state, isLoadingCreateChat: false }),
    CREATE_CHAT_SUCCESS: (state) => ({ ...state, isLoadingCreateChat: false }),
    CREATE_CHAT_FAIL: (state) => ({ ...state, isLoadingCreateChat: false }),

    GET_CHAT_START: (state) => ({ ...state, isLoadingGetChat: true }),
    GET_CHAT_SUCCESS: getChatSuccess,
    GET_CHAT_FAIL: (state) => ({ ...state, isLoadingGetChat: false }),

    GET_MESSAGES_START: (state) => ({ ...state, isLoadingGetMessages: true }),
    GET_MESSAGES_SUCCESS: getMessagesSuccess,
    GET_MESSAGES_FAIL: (state) => ({ ...state, isLoadingGetMessages: true }),

    CLEAR_MESSAGES: (state) => ({ ...state, messages: [], total: 0 }),
  });

export default chatReducer;