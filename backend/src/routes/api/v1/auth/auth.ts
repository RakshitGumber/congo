import { Router } from "express";

import { validateRequestBody } from "@/middlewares/zodValidation";

import { loginSchema } from "@/schemas/loginUserSchema";
import { signupSchema } from "@/schemas/signupUserSchema";

import loginUser from "./loginUser";
import signupUser from "./signupUser";
import verifyUser from "./verifyUser";

const router = Router();

router.post("/login", validateRequestBody(loginSchema), loginUser);
router.post("/signup", validateRequestBody(signupSchema), signupUser);
router.post("/verify", verifyUser);

export default router;
