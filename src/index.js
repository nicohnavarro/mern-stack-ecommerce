import express from "express";
import "./config/mongoose";
import cors from "cors";
import { PORT } from "./config";
import productRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(productRoutes);
app.use(authRoutes);

app.use((err, req, res, next) => {
  const error = {
    status: err.status || 500,
    message: err.message,
  };
  res.json(error);
});

app.listen(PORT);
console.log(`Server on port ${PORT}`);
