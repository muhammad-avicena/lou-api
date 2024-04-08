import express from "express";
import homeRoutes from "./v1/home.router.js";
import authRoutes from "./v1/auth.router.js";
import productTypeRoutes from "./v1/product-type.router.js";
import cakesRoutes from "./v1/cakes.router.js";
import usersRoutes from "./v1/users.router.js";

const router = express.Router();

router.use("/", homeRoutes);
router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/product-types", productTypeRoutes);
router.use("/api/v1/cakes", cakesRoutes);
router.use("/api/v1/users", usersRoutes);

export default router;
