import { Router} from "express"
import { profile, login, register } from "../controllers/auth.controller"

const router = Router();

router.post("/auth/login",login);

router.post("/auth/register",register);

router.get("/auth/profile",profile);

export default router;