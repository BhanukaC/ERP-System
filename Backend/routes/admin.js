const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/auth");
const validAccess = require("../middleware/admin");

const { userRegisterController, userUpdateController, resetPasswordForUser, userDeleteController, getSingleUserController, getAllUserController, getAllActivityController, getSingleActivityController, warehouseAddController, warehouseUpdateController, getSingleWarehouseController, getAllWarehouseController, setDiscountForCustomer, setDiscountForSubCategory, getAllSalesReturnOrderController, acceptSalesReturnOrderController } = require("../controllers/adminController");

router.post("/register", [validateToken, validAccess], userRegisterController);
router.put("/update/:id", [validateToken, validAccess], userUpdateController);
router.put("/passwordReset/:id", [validateToken, validAccess], resetPasswordForUser);
router.delete("/delete/:id", [validateToken, validAccess], userDeleteController);
router.get("/getUserData/:id", [validateToken, validAccess], getSingleUserController);
router.get("/getAllUserData", [validateToken, validAccess], getAllUserController);
router.get("/getAllActivityData", [validateToken, validAccess], getAllActivityController);
router.get("/getActivtyData/:id", [validateToken, validAccess], getSingleActivityController);
router.post("/Warehouse/add", [validateToken, validAccess], warehouseAddController);
router.put("/Warehouse/update/:id", [validateToken, validAccess], warehouseUpdateController);
router.get("/Warehouse/getSingle/:id", [validateToken, validAccess], getSingleWarehouseController);
router.get("/Warehouse/getAll/", [validateToken, validAccess], getAllWarehouseController);

router.post("/discount/customer", [validateToken, validAccess], setDiscountForCustomer);
router.put("/discount/subCategory", [validateToken, validAccess], setDiscountForSubCategory);

router.get("/salesReturnOrder/getAll", [validateToken, validAccess], getAllSalesReturnOrderController);
router.post("/salesReturnOrder/update", [validateToken, validAccess], acceptSalesReturnOrderController);

module.exports = router;