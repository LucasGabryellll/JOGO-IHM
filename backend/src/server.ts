import { httpServer } from "./http";
import dotenv from "dotenv";

import "./controller/mainController";

dotenv.config();

const PORT_SERVER = process.env.PORT_SERVER;

httpServer.listen(PORT_SERVER, () => console.log(`Server is running in localhost:${PORT_SERVER}`));