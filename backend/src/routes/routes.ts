import { Router, Request, Response } from "express";
import { openRoom } from "../controller/roomsController";

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.status(200).json({ active: true, message: "Server is Running", version: "1.0.0" });
});

routes.post('/open_room', (req: Request, res: Response) => {
  const { playerId, roomId } = req.body;
  openRoom({ playerId, roomId });

  return res.status(200).json({ message: "Usuário conectado com sucesso;" });
});

export { routes };