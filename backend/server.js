import mongoose from "mongoose";
import path from "path";
import express from "express";
import dotenv from "dotenv";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import { CONNECT } from "./config/db.js";
//--------------------------------
dotenv.config();
const app = express();
app.use(express.json());
CONNECT();
//----------------------------

//--------------middleware-------------
app.use(notFound);
app.use(errorHandler);

app.listen(8000, console.log("Server running"));
