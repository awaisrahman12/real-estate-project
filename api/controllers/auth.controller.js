import User from "../Models/user.model.js";
import bcyrpy from "bcryptjs";

export const signup = async (req, res)=>{

const { username, email, password} = req.body;
const hashedPassword = bcyrpy.hashSync(password, 10);
const newUser = new User({username, email, password: hashedPassword});
try {
    await newUser.save()
    res.status(201).json("User create successfully!");
} catch(err){
    res.status(500).json(err.message);
    }
};