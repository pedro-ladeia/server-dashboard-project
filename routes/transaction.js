import express from "express";
import Transaction from "../models/Transaction.js"


const router = express.Router();

router.get("",async (req, res) =>  {
    try{
        const transactions = await Transaction.find()
        .limit(50) //Limited to 50 registers of transactions
        .sort({ createdOn: -1 }); //Taking the lasts
        res.status(200).json(transactions);
        
    } catch(err) {
        res.status(404).json( {message: err.message });
    }
});

export default router;