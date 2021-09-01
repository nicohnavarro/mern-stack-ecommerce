import { Router } from "express";
const router = Router();

router.get("/products");
router.post("/products");
router.get("/products/:id");
router.put("/products/:id");
router.delete("/products/:id");

export default router;
