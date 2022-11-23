import { Router } from "express";
import RouteRoutes from "./routes/route.route";
import UserRoutes from "./routes/user.route";
import ProductRoutes from "./routes/product.route";

const router = Router();

router.use("/user", UserRoutes);
router.use("/route", RouteRoutes);
router.use("/product", ProductRoutes);

export { router };
