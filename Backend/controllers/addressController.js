

// ADD address : /api/address/add

import Address from "../models/Address.js"

export const addAddress= async (req,res) => {

    try {
        const {address,userId}=req.body
        await Address.create({...address,userId})
        res.json({sucess:true,message:"Address added successfully"})
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
    
}

//get address :/api/address/get

export const getAddress =async (req,res) => {
    try {
        const {userId}=req.body

        const addresses=await Address.find({userId})
        res.json({sucess:true,addresses})
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }   
}