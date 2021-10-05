/**
 * User interface
 */
 interface Room {
  id: number;
  roomNumber: number;
}

interface UpdateRoom {
  id: number;
  firstName?: string;
  lastName?: string;
}

export default Room;