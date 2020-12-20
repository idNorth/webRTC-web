import io from 'socket.io-client';

export const initSocket = () => io('http://localhost:4001/');

export function createRoomSocket() {
  this.socket.emit('createRoom')
}

export function joinRoomSocket(roomId) {
  console.log(this.socket);
  this.socket.emit('joinRoom', { roomId: 'testtest' })
}
