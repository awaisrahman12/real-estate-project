import User from "../Models/user.model.js";
import bcyrpy from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next)=>{

const { username, email, password} = req.body;
const hashedPassword = bcyrpy.hashSync(password, 10);
const newUser = new User({username, email, password: hashedPassword});
try {
    await newUser.save()
    res.status(201).json("User create successfully!");
} catch(error){
    next(error);
    }
};