import { Router } from "express";
import { getLevel } from "./crossword.controller.js";

const router = new Router();

router.get("/:level", getLevel);

export default router;
