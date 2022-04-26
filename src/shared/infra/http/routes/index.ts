import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { productRoutes } from "./products.routes";
import { usersRoutes } from "./user.routes";

const routes = Router();

routes.use("/products", productRoutes);
routes.use("/users", usersRoutes);
routes.use(authenticateRoutes);

export { routes };
