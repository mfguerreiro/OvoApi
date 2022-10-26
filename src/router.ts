import { Router } from "express";
import RouteRoutes from "./routes/route.route";
import UserRoutes from "./routes/user.route";

const router = Router();

router.use("/user", UserRoutes);
router.use("/route", RouteRoutes);

export { router };
