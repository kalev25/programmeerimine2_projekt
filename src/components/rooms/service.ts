import db from '../../db';
import Room from './interfaces';

const roomsService = {
  getAllRooms: (): Room[] => {
    const { rooms } = db;
    return rooms;
  },
  /**
   * Returns Room or undefined
   */
  getRoomById: (id: number): Room | undefined => {
    const Room = db.rooms.find((element) => element.id === id);
    return Room;
  },
  removeRoom: (id: number): boolean => {
	db.rooms = db.rooms.filter(Room => Room.id !== id);
    return true;
  },
  createRoom: (roomNumber: number) => {
    const id = db.rooms.length + 1;
    db.rooms.push({
      id,
      roomNumber,
    });
    return id;
  },
  updateRoom: (data: { id: number, roomNumber: number}): boolean => {
    const { id, roomNumber} = data;
    const index = db.rooms.findIndex((element) => element.id === id);
    if (roomNumber) {
      db.rooms[index].roomNumber = roomNumber;
    }
    return true;
  },
};

export default roomsService;
