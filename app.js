// import dotenv from "dotenv";
// import express from "express";
// import mongoose from "mongoose";

// dotenv.config();
// const now = Date.now();

// mongoose
//   .connect(process.env.MONGODB_URI || "<YOUR_MONGODB_URI>")
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("MongoDB connection error:", error);
//   });

// const app = express();
// const port = process.env.PORT || 3333;

// const UserSchema = new mongoose.Schema(
//   {
//     user_id: String,
//     name: String,
//   },
//   {
//     versionKey: false,
//   }
// );
// const UserModel = mongoose.model("users", UserSchema);

// app.use(express.json());

// const logger = (req, res, next) => {
//   const currentTime = new Date().toISOString();
//   console.log(`[${currentTime}] ${req.method} ${req.url}`);
//   next();
// };
// app.use(logger);

// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

// app.get("/api", (req, res) => {
//   res.json({ message: "Welcome to the API!" });
// });

// app.get("/error", (req, res, next) => {
//   throw new Error("This is a test error!");
// });

// app.get("/next-error", (req, res, next) => {
//   const error = new Error("This is another test error!");
//   next(error);
// });

// app.get("/users", async (req, res) => {
//   const user = await UserModel.find();
//   res.json(user);
// });

// app.post("/users", async (req, res) => {
//   const newUser = req.body;
//   const newUserData = { user_id: generateUniqueId() + 1, name: newUser.name };
//   const addUser = await UserModel.create(newUserData);
//   res.json(addUser);
// });

// app.get("/users/id/:id", async (req, res) => {
//   const userId = req.params.id;
//   const result = await UserModel.findOne({ user_id: userId });
//   if (result) {
//     res.json({ result });
//   } else {
//     res.status(400).json({ message: "user not found" });
//   }
// });

// app.delete("/users/id/:id", async (req, res) => {
//   const user_id = req.params.id;
//   const userInfo = await UserModel.findOne({ user_id })
//   const result = await UserModel.deleteOne({ user_id });
//   if (result.deletedCount === 1) {
//     res.json({ message: `User:${userInfo.name} has been deleted` });
//   } else {
//     res.status(400).json({ message: "user not found" });
//   }
// });

// app.get("/users/search", async (req, res) => {
//   const name = req.query.name;
//   const user_id = req.query.id;
//   console.log("Search parameters:", { name, user_id });

//   const query = {};
//   if (name) query.name = { $regex: name, $options: "i" };
//   if (user_id) query.user_id = user_id;

//   console.log("query", query);

//   const result = await UserModel.find(query);
//   res.json({ result });
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Error!");
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// const generateUniqueId = () => {
//   return "id-" + Math.random().toString(36).substr(2, 9);
// };

import express from "express";
import mongoose from "mongoose";
import dotenv from "./config/dotenv.js";
import userRoutes from "./routes/userRoutes.js";
import logger from "./middleware/logger.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URI || "<YOUR_MONGODB_URI>")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use(express.json());
app.use(logger);
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});