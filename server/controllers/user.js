import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import userModel from '../models/user.js';

export const signin = async (req, res) => {

    const { email, password } = req.body;

    try {

        const existingUser = await userModel.findOne({ email })

        if (!existingUser) return res.status(404).json({ message: "User doesn't exists" })

        const passwordMatch = bcrypt.compare(password, existingUser.password);

        if (!passwordMatch) return res.status(404).json({ message: "Invalid credentials" })

        // User is Valid ..Lets create JWT token and send it to client
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'secret', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }

}

export const signup = async (req, res) => {

    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password mismatch!" })
        }

        //  Creating the new user
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await userModel.create({ email, name: `${firstName} ${lastName}`, password: hashedPassword })

        const token = jwt.sign({ email: result.email, id: result._id }, 'secret', { expiresIn: "1h" });

        res.status(200).json({ result: result, token })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }

}