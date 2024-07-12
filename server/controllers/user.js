import User from "../modules/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class UserController {
  static userRegister = async (req, res) => {
    const { email, username, password, confirm } = req.body;
    console.log("Register request data:", email, username, password, confirm);

    if (!email || !username || !password || !confirm) {
      return res
        .status(400)
        .send({ status: "failed", message: "All fields are required" });
    }

    if (password !== confirm) {
      return res
        .status(400)
        .send({ status: "failed", message: "Passwords do not match" });
    }

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .send({ status: "failed", message: "Email already registered" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        email,
        username,
        password: hashedPassword,
      });

      await newUser.save();

      const token = jwt.sign({ userID: newUser._id }, process.env.SECRETKEY, {
        expiresIn: "5d",
      });
      res.cookie("authcookie", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600000 * 24 * 5,
      });

      console.log( req.cookie);

      return res.status(201).send({
        status: "success",
        message: "User registered successfully",
        token,
      });
    } catch (error) {
      console.error("Error details:", error);
      res.status(500).send({ status: "failed", message: error.message });
    }
  };
  static userLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log("Login request data:", email, password);

    if (!email || !password) {
      return res
        .status(400)
        .send({ status: "failed", message: "Email and password are required" });
    }

    try {
      const loginUser = await User.findOne({ email });

      if (!loginUser) {
        return res.status(404).send({
          status: "failed",
          message: "User not registered, please sign up",
        });
      }

      const isMatch = await bcrypt.compare(password, loginUser.password);
      if (!isMatch) {
        return res
          .status(400)
          .send({ status: "failed", message: "Password does not match" });
      }

      const token = jwt.sign({ userID: loginUser._id }, process.env.SECRETKEY, {
        expiresIn: "5d",
      });

      // Set token in HttpOnly cookie
      res.cookie("authToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Set to true in production
        maxAge: 3600000 * 24 * 5, // 5 days
      });

      res.status(200).send({
        status: "success",
        message: "User logged in successfully",
        token,
      });
    } catch (error) {
      console.error("Error details:", error);
      res.status(500).send({ status: "failed", message: error.message });
    }
  };
}

export default UserController;
