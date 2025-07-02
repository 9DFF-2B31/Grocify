//register user :/api/user/register
import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({ success: false, message: "Missing Details" })
        }
        //if data available of existing user

        const existingUser = await User.findOne({ email })
        if (existingUser) return res.json({ success: false, message: "User already exists" })
        //to create a user we need to incrypt the user password from bicrypt
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, password: hashedPassword })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })//_id will bw unique for each user
        res.cookie('token', token, {
            httpOnly: true,//prevent JS to access the cookie
            secure: process.env.NODE_ENV === 'production',//use secure cookies in production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',//CSRF protection
            maxAge: 7 * 24 * 60 * 60 * 1000,//cookie expiration time
        })
        return res.json({ success: true, user: { email: user.email, name: user.name } })
    } catch (error) {
        res.json({ success: false, message: error.message });

    }
}

// Login User: /api/user/login

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.json({ success: false, message: 'Email and password are required' });
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: 'Invalid Email and password ' });

        }

        const isMatch = await bcrypt.compare(password, user.password)//userpassword is stored in database
        if (!isMatch) {
            return res.json({ success: false, message: 'Invalid Email and password ' });
        }
        //if password (matches) is correct then we have to create token because user is logged in

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })//_id will bw unique for each user
        res.cookie('token', token, {
            httpOnly: true,//prevent JS to access the cookie
            secure: process.env.NODE_ENV === 'production',//use secure cookies in production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',//CSRF protection
            maxAge: 7 * 24 * 60 * 60 * 1000,//cookie expiration time
        })
        return res.json({ success: true, user: { email: user.email, name: user.name } })

    } catch (error) {
        res.json({ success: false, message: error.message });

    }
}


//check Auth: /api/user/is-auth

export const isAuth = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId).select("-password")
        return res.json({ success: true, user })


    } catch (error) {
        console.log(error.message);
        return res.json({ success: false, message: error.message })

    }
}

//logout: /api/user/logout

export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });

        return res.json({ success: true, message: "Logged Out" })


    } catch (error) {
        console.log(error.message);
        return res.json({ success: false, message: error.message })

    }
}