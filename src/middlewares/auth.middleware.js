import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).send({ message: "Unathorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded);
    req.userId = decoded.id;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: "Unathorized" });
  }
};
