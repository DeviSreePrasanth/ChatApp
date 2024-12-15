// routes/authRoutes.js
import { Router } from "express";
import { signUp, login } from "../controllers/authController.js";

const router = Router();

// POST / for both sign up and log in
router.post("/", (req, res) => {
  const { type } = req.body; // Either 'signup' or 'login'

  if (type === "signup") {
    return signUp(req, res); // Call the signup controller
  } else if (type === "login") {
    return login(req, res); // Call the login controller
  } else {
    return res.status(400).json({ msg: "Invalid request type" });
  }
});

export default router;
