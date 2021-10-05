import { Request, Response } from 'express';
import { servicesVersion } from 'typescript';
import responseCodes from '../general/responseCodes';
import roomsService from './service';

const roomsController = {
getAllRooms: (req: Request, res: Response) => {
	const rooms = roomsService.getAllRooms();
	return res.status(responseCodes.ok).json({
		rooms,
	});

},
	
getRoomById: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: 'No valid id provided',
      });
    }
    const room = roomsService.getRoomById(id);
    if (!room) {	
      return res.status(responseCodes.badRequest).json({
        error: `No room found with id: ${id}`,
      });
	  
    }
    return res.status(responseCodes.ok).json({
      room,
    });
},

removeRoom: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deleted = roomsService.getRoomById(id);
    if (deleted) {
        roomsService.removeRoom(id);
        res.status(responseCodes.ok).json({
            deleted
        })
    }else{  
        res.status(responseCodes.notFound).json({ message: "room you are looking for does not exist"});
    }
},

updateRoom: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const { roomNumber } = req.body;
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: 'No valid id provided',
      });
    }
    if (!roomNumber) {
      return res.status(responseCodes.badRequest).json({
        error: 'Nothing to update',
      });
    }
    const room = roomsService.getRoomById(id);
    if (!room) {
      return res.status(responseCodes.badRequest).json({
        error: `No room found with id: ${id}`,
      });
    }
    roomsService.updateRoom({ id, roomNumber });
    return res.status(responseCodes.noContent).json({});
  },

  createRoom: (req: Request, res: Response) => {
    const { roomNumber } = req.body;
    if (!roomNumber) {
      return res.status(responseCodes.badRequest).json({
        error: 'Room number is required',
      });
    }
 	const id = roomsService.createRoom(roomNumber);
    return res.status(responseCodes.created).json({
      id,
    });
  },
  
};

export default roomsController;