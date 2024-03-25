import { Request, Response } from "express";
import Category from "../models/Category.Models";

class CategoryController {
    public static async createCategory(req:Request,res:Response) {
        try {
            const newCategory = new Category(req.body)
            await newCategory.save();
            res.status(201).json({'Msg':'Kayıt Başarılı'})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    public static async getAllCategory(req:Request,res:Response) {
        try {
            const categories = await Category.find()
            res.status(200).json({'Msg':'Kayıtlar Bulundu',categories})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    public static async updateCategory(req:Request,res:Response){
        try {
            const updatedCategory = await Category.findByIdAndUpdate({_id:req.body._id},req.body);
            res.status(200).json({"Msg":"Kayıt Başarıyla Güncellendi",updatedCategory})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    public static async deleteCategory(req:Request,res:Response){
        try {
            const deletedCategory = await Category.findByIdAndDelete({_id:req.body.categoryId});
            res.status(200).json({"Msg":"Kayıt Başarıyla Silindi",deletedCategory})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    
}

export default CategoryController