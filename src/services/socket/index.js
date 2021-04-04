import io from 'socket.io-client';

import config from '../../config';
import { IO_TYPES } from './type';

const socketOptions = {
  path: '/api/socket.io',
  reconnectionDelay: 1000,
  reconnectionDelayMax: 60000,
  timeout: 1000,
};

let socket;

export const connectSocket = () => new Promise((res) => {
  socket = io(`${config.api.protocol}://${config.api.host}:${config.api.port}`, socketOptions);
  socket.on('connect', () => {
    console.log('connected');
    res();
  });

  socket.on('disconnect', (reason) => {
    console.log(`disconnected: ${reason}`);
  });
});



export const addListenerLogin = (cb) => {
  socket.on(IO_TYPES.LOGIN, cb);
}

export const emitLogin = (option) => {
  socket.emit(IO_TYPES.LOGIN, option);
}

export const emitLogout = (option) => {
  socket.emit(IO_TYPES.LOGOUT, option);
}
