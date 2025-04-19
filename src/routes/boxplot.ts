import { Router } from "express";
import { getBoxplot, getOutliers } from "../controllers/boxplot";

const router = Router();
router.get("/", getBoxplot);           // GET /api/boxplot  → datos + stats
router.get("/outliers", getOutliers);  // GET /api/boxplot/outliers → sólo outliers
export default router;
