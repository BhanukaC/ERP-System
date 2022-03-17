const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/auth");
const validAccess = require("../middleware/purchaseManager");


const { categoryAddController, categoryUpdateController, getSingleCategoryController, getAllCategoryController, subCategoryAddController, subCategoryUpdateController, getSingleSubCategoryController, getAllSubCategoryController, productAddController, productUpdateController, getSingleProductController, getAllProductController, supplierAddController, supplierUpdateController, getSingleSupplierController, getAllSupplierController, supplierContactNumberAddController, supplierContactNumberUpdateController, getSingleSupplierContactNumberController, getAllSupplierContactNumbersController, deleteSupplierContactNumberController, supplierStoreLocationAddController, supplierStoreLocationUpdateController, getSingleSupplierStoreLocationController, getAllSupplierStoreLocationsController, deleteSupplierStoreLocationController, addPurchaseOrderController, getSinglePurchaseOrderController, getAllPurchaseOrderController, getSinglePurchaseOrderDataController } = require("../controllers/purchaseController");


//Category
router.post("/category/add", [validateToken, validAccess], categoryAddController);
router.put("/category/update/:id", [validateToken, validAccess], categoryUpdateController);
router.get("/category/getSingle/:id", [validateToken, validAccess], getSingleCategoryController);
router.get("/category/getAll", [validateToken, validAccess], getAllCategoryController);


//Sub Category
router.post("/subCategory/add", [validateToken, validAccess], subCategoryAddController);
router.put("/subCategory/update/:id", [validateToken, validAccess], subCategoryUpdateController);
router.get("/subCategory/getSingle/:id", [validateToken, validAccess], getSingleSubCategoryController);
router.get("/subCategory/getAll", [validateToken, validAccess], getAllSubCategoryController);

//product
router.post("/product/add", [validateToken, validAccess], productAddController);
router.put("/product/update/:id", [validateToken, validAccess], productUpdateController);
router.get("/product/getSingle/:id", [validateToken, validAccess], getSingleProductController);
router.get("/product/getAll", [validateToken, validAccess], getAllProductController);

//supplier
router.post("/supplier/add", [validateToken, validAccess], supplierAddController);
router.put("/supplier/update/:id", [validateToken, validAccess], supplierUpdateController);
router.get("/supplier/getSingle/:id", [validateToken, validAccess], getSingleSupplierController);
router.get("/supplier/getAll", [validateToken, validAccess], getAllSupplierController);

//supplier contact Number
router.post("/supplier/contactNumber/add", [validateToken, validAccess], supplierContactNumberAddController);
router.put("/supplier/contactNumber/update/:id", [validateToken, validAccess], supplierContactNumberUpdateController);
router.get("/supplier/contactNumber/getSingle/:id", [validateToken, validAccess], getSingleSupplierContactNumberController);
router.get("/supplier/contactNumber/getAll/:id", [validateToken, validAccess], getAllSupplierContactNumbersController);
router.delete("/supplier/contactNumber/delete/:id", [validateToken, validAccess], deleteSupplierContactNumberController);

//supplier store location
router.post("/supplier/storeLocation/add", [validateToken, validAccess], supplierStoreLocationAddController);
router.put("/supplier/storeLocation/update/:id", [validateToken, validAccess], supplierStoreLocationUpdateController);
router.get("/supplier/storeLocation/getSingle/:id", [validateToken, validAccess], getSingleSupplierStoreLocationController);
router.get("/supplier/storeLocation/getAll/:id", [validateToken, validAccess], getAllSupplierStoreLocationsController);
router.delete("/supplier/storeLocation/delete/:id", [validateToken, validAccess], deleteSupplierStoreLocationController);

//purchase orders
router.post("/purchaseOrder/add", [validateToken, validAccess], addPurchaseOrderController);
router.get("/purchaseOrder/getSingle/:id", [validateToken, validAccess], getSinglePurchaseOrderController);
router.get("/purchaseOrder/getAll/", [validateToken, validAccess], getAllPurchaseOrderController);
router.get("/purchaseOrderData/get/:id", [validateToken, validAccess], getSinglePurchaseOrderDataController);


module.exports = router;