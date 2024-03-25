import {Router,Request,Response} from "express";
import CategoryController from "../controller/Category.Controller";
import ProductController from "../controller/Product.Controller";
import BillController from "../controller/Bill.Controller";

const router = Router();

router.get("/",(req:Request,res:Response) => res.status(200).json({'Msg':'Ana Sayfa'}))

router.post("/createCategory",CategoryController.createCategory)
router.get("/getAllCategory",CategoryController.getAllCategory)
router.put("/updateCategory",CategoryController.updateCategory)
router.delete("/deleteCategory",CategoryController.deleteCategory)

router.post("/createProduct",ProductController.createProduct)
router.get("/getAllProduct",ProductController.getAllProduct)
router.put("/updateProduct",ProductController.updateProduct)
router.delete("/deleteProduct",ProductController.deleteProduct)

router.post("/createBill",BillController.createBill)
router.get("/getAllBill",BillController.getAllBill)
router.put("/updateBill",BillController.updateBill)
router.delete("/deleteBill",BillController.deleteBill)

export default router;
