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

//------------------deloyment-----------------
const __dirname1 = path.resolve();

if (process.env.STATUS === "PRODUCT") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

//------------------deloyment-----------------

//--------------middleware-------------
app.use(notFound);
app.use(errorHandler);

app.listen(8000, console.log("Server running"));
