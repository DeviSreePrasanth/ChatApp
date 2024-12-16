import { Router } from "express";
import { signUp, login } from "../controllers/authController.js";

const router = Router();

// POST / for both signup and login
router.post("/", async (req, res) => {
  const { type, email, password, name } = req.body; // 'type' is either 'signup' or 'login'

  // Validate request body for required fields
  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required" });
  }

  if (type === "signup") {
    // Validate signup form data
    if (!name) {
      return res.status(400).json({ msg: "Name is required for signup" });
    }
    try {
      // Call the signup controller
      return await signUp(req, res);
    } catch (error) {
      return res.status(500).json({ msg: "Internal server error", error });
    }
  } else if (type === "login") {
    // Call the login controller
    try {
      return await login(req, res);
    } catch (error) {
      return res.status(500).json({ msg: "Internal server error", error });
    }
  } else {
    return res.status(400).json({ msg: "Invalid request type, must be 'signup' or 'login'" });
  }
});

export default router;
