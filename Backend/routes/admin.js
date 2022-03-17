const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/auth");
const validAccess = require("../middleware/admin");

const { userRegisterController, userUpdateController, userDeleteController, getSingleUserController, getAllUserController, getAllActivityController, getSingleActivityController, warehouseAddController, warehouseUpdateController, getSingleWarehouseController, getAllWarehouseController } = require("../controllers/adminController");

router.post("/register", [validateToken, validAccess], userRegisterController);
router.put("/update/:id", [validateToken, validAccess], userUpdateController);
router.delete("/delete/:id", [validateToken, validAccess], userDeleteController);
router.get("/getUserData/:id", [validateToken, validAccess], getSingleUserController);
router.get("/getAllUserData", [validateToken, validAccess], getAllUserController);
router.get("/getAllActivityData", [validateToken, validAccess], getAllActivityController);
router.get("/getActivtyData/:id", [validateToken, validAccess], getSingleActivityController);
router.post("/Warehouse/add", [validateToken, validAccess], warehouseAddController);
router.put("/Warehouse/update/:id", [validateToken, validAccess], warehouseUpdateController);
router.get("/Warehouse/getSingle/:id", [validateToken, validAccess], getSingleWarehouseController);
router.get("/Warehouse/getAll/", [validateToken, validAccess], getAllWarehouseController);

module.exports = router;