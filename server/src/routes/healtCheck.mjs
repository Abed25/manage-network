import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Backend is set and running");
});

export default router;
