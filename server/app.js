import express from "express";
import dbConnection from "./connections/dbconnection.js";
import userControllers from "./controllers/user.js";
import verifeid from "./middleware/user.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

dbConnection("mongodb://localhost:27017");

app.post("/register",  userControllers.userRegister);
app.post("/login", verifeid,  userControllers.userLogin);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
