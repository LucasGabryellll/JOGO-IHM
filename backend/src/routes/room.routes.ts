import { Router } from 'express';

import { createRoom, getAllRoom, deleteRoom } from '../controller/roomController';

const roomRoutes = Router();

roomRoutes.get('/create-room', createRoom);
roomRoutes.get('/rooms', getAllRoom);
roomRoutes.get('/room/delete/:id', deleteRoom);

export { roomRoutes };