import {Router} from "express";

import { login, signup ,getCurrentUser,logout} from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/me", getCurrentUser);
authRouter.post("/logout", logout);

export default authRouter;
