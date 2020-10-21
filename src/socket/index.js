import io from 'socket.io-client';

export const initSocket = () => io.connect("/");

export const createRoomSocket = (label, password) => {
  this.socket.emit('createRoom', { label, password })
};

export const joinTheRoomSocket = (label, password) => {
  this.socket.emit('joinTheRoom', { label, password })
};

export const getRoomsSocket = (keyword) => {
  this.socket.emit('getRooms', { keyword })
};
