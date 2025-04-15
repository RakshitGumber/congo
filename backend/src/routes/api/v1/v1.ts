import { Router } from "express";
import { auth } from "./auth";

const router = Router();

router.use("/auth", auth);
// router.use("/admin", admin);

export default router;
