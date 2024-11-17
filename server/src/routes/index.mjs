import { Router } from "express";
import healthCheck from "./healtCheck.mjs";
import networkUser from "./users.mjs";

const router = Router();

router.use(healthCheck);
router.use("/api", networkUser);

export default router;
