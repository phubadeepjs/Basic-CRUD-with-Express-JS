import UserModel from "../models/userModels.js";
import generateUniqueId from "../utils/generateUniqueId.js";

export const getUserList = async (req, res) => {
  const name = req.query.name;
  const user_id = req.query.id;

  const query = {};
  if (name) query.name = { $regex: name, $options: "i" };
  if (user_id) query.user_id = user_id;

  const result = await UserModel.find(query);
  res.json({ result });
};

export const createUser = async (req, res) => {
  const newUser = req.body;
  const newUserData = { user_id: generateUniqueId() + 1, name: newUser.name };
  const addUser = await UserModel.create(newUserData);
  res.json(addUser);
};

export const getUserDetail = async (req, res) => {
  const userId = req.params.id;
  const result = await UserModel.findOne({ user_id: userId });
  if (result) {
    res.json({ result });
  } else {
    res.status(400).json({ message: "user not found" });
  }
};

export const deleteUser = async (req, res) => {
  const user_id = req.params.id;
  const result = await UserModel.deleteOne({ user_id });
  if (result.deletedCount > 0) {
    res.json({ message: `User has been deleted` });
  } else {
    res.status(400).json({ message: "user not found" });
  }
};

export const updateUser = async (req, res) => {
  const user_id = req.params.id;
  const body = req.body;
  const updateData = {};

  if (body.name) updateData.name = body.name;
  const result = await UserModel.updateOne({ user_id }, updateData);
  if (result.modifiedCount > 0) {
    res.json({ message: `User has been updated` });
  } else if (result.modifiedCount == 0 && result.matchedCount > 0) {
    res.status(400).json({ message: "No new updates found" });
  } else {
    res.status(400).json({ message: "user not found" });
  }
};
