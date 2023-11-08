import { Router } from "express";
const router = Router();
import { login, logout, register } from '../controllers/authController.js';
import { validateRegisterInput, validateLoginInput } from "../middleware/validationMiddleware.js";

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.post('/logout', logout);

export default router;