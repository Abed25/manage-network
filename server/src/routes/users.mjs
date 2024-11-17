import { Router } from "express";
import { netUser } from "../utils/networkUsers.mjs";

const router = Router();

router.get("/users", (req, res) => {
  res.send(netUser);
});

export default router;
