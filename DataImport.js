import express from 'express';
import User from './models/user';
import users from "./data/users";
import asyncHandler from 'express-async-handler'

const ImportData = express. Router();

ImportData.post("/user", async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser })
});

export default ImportData;