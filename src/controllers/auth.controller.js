import { User } from "../models";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { userSchema } from "../libs/schema.validator";
import { signAccessToken } from "../helpers/signAccessToken";
import createError from "http-errors";

export const login = async (req, res, next) => {
  try {
    const result = await userSchema.validateAsync(req.body);

    const userFound = await User.findOne({ email: result.email });

    if (!userFound) return res.status(401).json({ message: "User not found" });

    const isMatch = await userFound.validPassword(result.password);

    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = await signAccessToken(userFound.id);

    res.json({ token });
  } catch (err) {
    if (err.isJoi) return next(createError.BadRequest());
    next(err);
  }
};

export const register = async (req, res, next) => {
  try {
    const result = await userSchema.validateAsync(req.body);
    console.log(result);
    const userFound = await User.findOne({ email: result.email });

    if (userFound) {
      res.statusMessage = "User already exists";
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({
      email: result.email,
      password: result.password,
    });

    newUser.password = await newUser.generateHash(newUser.password);

    const userSaved = await newUser.save();

    jwt.sign({ id: userSaved._id }, JWT_SECRET, (err, token) => {
      err ? res.status(500).send(err) : res.json({ token });
    });
  } catch (err) {
    if (err.isJoi) return next(createError.NotFound());
    next(err);
  }
};

export const profile = async (req, res) => {
  const user = await User.findOne({ _id: req.userId }).select("-password");
  if (!user) return res.status(401).json({ message: "User not found" });

  res.json(user);
};
