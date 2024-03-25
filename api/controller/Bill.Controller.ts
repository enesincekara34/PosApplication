import { Request,Response } from "express";
import Bill from "../models/Bills.Models";

class  BillController{

    public static async createBill(req:Request,res:Response){
        try {
            const newBill = await new Bill(req.body)
            newBill.save()
            res.status(201).json({"Msg":"Kayıt Başarılı"})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    public static async getAllBill(req:Request,res:Response){
        try {
            const Bills = await Bill.find()
            res.status(200).json({"Msg":"Kayıtlar Bulundu",Bills})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    public static async updateBill(req:Request,res:Response){
        try {
            const updatedBill = await Bill.findByIdAndUpdate({_id:req.body._id},req.body)
            res.status(200).json({"Msg":"Kayıtlar Güncellendi",updatedBill})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    public static async deleteBill(req:Request,res:Response){
        try {
            const deletedBill = await Bill.findByIdAndDelete({_id:req.body._id},req.body)
            res.status(200).json({"Msg":"Kayıtlar Silindi",deletedBill})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}


export default BillController