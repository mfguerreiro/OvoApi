import { Router } from "express";
import RouteRoutes from "./routes/route.route";
import UserRoutes from "./routes/user.route";
import ProductRoutes from "./routes/product.route";
import StockRoutes from "./routes/stock.route";

const router = Router();

router.use("/user", UserRoutes);
router.use("/route", RouteRoutes);
router.use("/product", ProductRoutes);
router.use("/stock", StockRoutes);

export { router };
