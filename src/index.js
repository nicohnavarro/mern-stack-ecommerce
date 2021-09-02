import express from "express";
import "./config/mongoose";
import productRoutes from "./routes/products.routes";
import {PORT} from './config';

const app = express();
app.use(express.json());
app.use(productRoutes);
app.listen(PORT);
console.log(`Server on port ${PORT}`);
