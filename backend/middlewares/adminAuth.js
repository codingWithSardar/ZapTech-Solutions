import jwt from "jsonwebtoken";

export const adminAuth = (req, res, next) => {
  try {
    const {adminToken} = req.cookies;

    if (!adminToken) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    const decoded = jwt.verify(
      adminToken,
      process.env.JWT_SECRET
    );
  
    

    if (decoded.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin access required",
      });
    }

    req.admin = decoded;

    next();
  } catch (error) {
    console.error("Admin Auth Error:", error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired session",
    });
  }
};


