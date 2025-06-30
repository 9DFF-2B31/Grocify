//register user :/api/user/register
import User from "../models/User.js"
import bicrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const register = async (req, res) => {
    try {
        const{name,email,password}=req.body;
        if(!name || !email || !password){
            return res.json({success:false,message:"Missing Details"})
        }
        //if data available of existing user

        const existingUser=await User.findOne({email})
        if(existingUser) return res.json({success:false,message:"User already exists"})
        //to create a user we need to incrypt the user password from bicrypt
        const hashedPassword=await bcrypt.hash(password,10)
        const user=await User.create({name,email,password:hashedPassword})

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})//_id will bw unique for each user
        res.cookie('token',token,{
            httpOnly:true,//prevent JS to access the cookie
            secure:process.env.NODE_ENV==='production',//use secure cookies in production
            sameSite:process.env.NODE_ENV==='production'?'none':'strict',//CSRF protection
            maxAge:7*24*60*60*1000,//cookie expiration time
        })
        return res.json({success:true,user:{email:user.email, name:user,name}})
} catch (error) {
    res.json({success:false ,message:error.message});

    }
}