import express from "express";
import Product from "../models/Product.js"


const router = express.Router();

router.get("",async (req, res) =>  {
    try{
        const products = await Product.find();
        res.status(200).json(products);
        
    } catch(err) {
        res.status(404).json( {message: err.message });
    }
});

export default router;