import { Router } from 'express';

import { createNewRoom, getAllRoom, deleteRoom } from '../controller/roomsController';

const roomRoutes = Router();

roomRoutes.get('/create-room', createNewRoom);
roomRoutes.get('/rooms', getAllRoom);
roomRoutes.get('/room/delete/:id', deleteRoom);

export { roomRoutes };