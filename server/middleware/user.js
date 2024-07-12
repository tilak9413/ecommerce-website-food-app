import jwt from "jsonwebtoken";

const verified = (req, res, next) => {
  const token = req.cookies.authToken;
  console.log(token);
  if (!token) {
    console.log("hello");
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
      
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

export default verified;
