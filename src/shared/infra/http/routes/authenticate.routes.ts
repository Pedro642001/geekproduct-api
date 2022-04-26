import { AuthenticateUserController } from "@modules/users/useCases/AuthenticateUser/authenticateUserController";
import { Router } from "express";

const authenticateRoutes = Router();
const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes };
