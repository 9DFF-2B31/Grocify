import {v2 as cloudinary} from "cloudinary"
import Product from "../models/Product.js"

// Add product:/api/product/add

export const addProduct=async (req,res) =>{
    try {
        let productData=JSON.parse(req.body.productData)

        const images=req.files

        let imagesUrl= await Promise.all(
            images.map(async (image) =>{
                let result=await cloudinary.uploader.upload(image.path,{
                    resource_type:"image"
                })
                return result.secure_url
            })
        )

        await Product.create({...productData,image:imagesUrl})

        return res.json({success:true,message:"product added"})

    } catch (error) {
        console.log("hi"+error.message)
        return res.json({success:false,message:error.message})
    }
        
    }

     // Only reply if nothing has been sent yet
    
    


// Get product:/api/product/list

export const productList=async (req,res) =>{

    try {
        const products=await Product.find({})
        res.json({success:true,products})
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
    
}
// get individual product:/api/product/id
export const productById=async (req,res) =>{
    try {
        const {id} =req.body;
        const product=await Product.findById(id)
        res.json({success:true,product})
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
    
}

// Change product inStock : /api/product/stock

export const changeStock = async (req,res) => {
    try {
        const {id ,inStock} =req.body;
        await Product.findByIdAndUpdate(id,{inStock})
        return res.json({success:true,message:"Stock updated"})
    } catch (error) {
        console.log(error.message)
        return res.json({success:false,message:error.message})
    }
        
    
    
}