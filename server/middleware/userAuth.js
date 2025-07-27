import jwt from 'jsonwebtoken';

export const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized, Login Again" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.id) {
            req.user = { id: decoded.id }; // FIXED: set on req.user, not req.body
            next();
        } else {
            return res.status(401).json({ success: false, message: "Not Authorized, Login Again" });
        }

    } catch (error) {
        return res.status(401).json({ success: false, message: error.message });
    }
};



// Middleware to verify JWT from cookies and attach user info to the request object
export const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach user to request
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

