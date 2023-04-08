import express from "express";
import jwt from "jsonwebtoken";

export const jwtSecret =
  "dd1466449febb5b12e7710fb2655c97bd3f744e44671ef0c1713f0e9899f77a1f687bcb3f6a935c8ac7487d440918ac66fb8e25280cff4b9da5581a24de0bfc7";
export const jwtExpiration = "24h";

// // Middleware to check for JWT in Authorization header
const authMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Authorization header is required" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtSecret) as { email: string };
    req.body.email = decoded.email;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authMiddleware;
