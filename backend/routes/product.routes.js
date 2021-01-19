import express from "express";
import {
    getProductList,
    getProductDetails,
    deleteProduct,
    createProduct,
    updateProduct,
} from "../controllers/product.controller.js";
import { admin, protect } from "../middleware/auth.js";

const router = express.Router();

/**
 * @description Get product for admin
 * @method      GET
 * @url         /api/product/
 * @access      private/Admin
 */
router.get("/", getProductList);
/**
 * @description GET user by id for admin
 * @method      GET
 * @url         /api/product/<id>
 * @access      private/Admin
 */
router.get("/:id", getProductDetails);
/**
 * @description Delete products for admin
 * @method      DELETE
 * @url         /api/product/<id>
 * @access      private/Admin
 */
router.delete("/:id", protect, admin, deleteProduct);
/**
 * @description Create products by admin
 * @method      POST
 * @url         /api/product/
 * @access      private/Admin
 */
router.post("/", protect, admin, createProduct);
/**
 * @description Update products by admin
 * @method      PUT
 * @url         /api/product/<id>
 * @access      private/Admin
 */
router.put("/:id", protect, admin, updateProduct);
export default router;
