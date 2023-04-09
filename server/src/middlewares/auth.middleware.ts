import express from "express";
import jwt from "jsonwebtoken";

export const JWT_SECRET =
  "dd1466449febb5b12e7710fb2655c97bd3f744e44671ef0c1713f0e9899f77a1f687bcb3f6a935c8ac7487d440918ac66fb8e25280cff4b9da5581a24de0bfc7";

// // Middleware to check for JWT in Authorization header
const authMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      meta: {
        status: 401,
        success: false,
        message: "Authorization header is required",
      },
      body: null,
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
    req.body.email = decoded.email;
    next();
  } catch (err) {
    return res.status(401).json({
      meta: {
        status: 401,
        success: false,
        message: "Invalid or expired token",
      },
      body: null,
    });
  }
};

export default authMiddleware;
