import { Request,Response } from "express";
import Product from "../models/Product.Models";

class ProductController{

    public static async createProduct(req:Request,res:Response){
        try {
            const newProduct = new Product(req.body);
            await newProduct.save()
            res.status(201).json({"Msg":"Product Başarıyla Eklendi",newProduct})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    public static async getAllProduct(req:Request,res:Response){
        try {
            const products = await Product.find();
            res.status(200).json({"Msg":"Kayıt Başarıyla Bulundu",products})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    public static async updateProduct(req:Request,res:Response){
        try {
            const updateProduct = await Product.findByIdAndUpdate({_id:req.body._id},req.body)
            res.status(200).json({"Msg":"Kayıt Güncellendi",updateProduct})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    public static async deleteProduct (req:Request,res:Response){
        try {
            const deletedProduct = await Product.findByIdAndDelete({_id:req.body._id},req.body);
            res.status(500).json({"Msg":"Kayıtlar Başarıtla Silindi",deletedProduct})
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

export default ProductController