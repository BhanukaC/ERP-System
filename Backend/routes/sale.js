const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/auth");
const validAccess = require("../middleware/cashier");

const { customerAddController, customerUpdateController, getSingleCustomerController, getAllCustomerController, customerContactNumberAddController, customerContactNumberUpdateController, getSingleCustomerContactNumberController, getAllCustomerContactNumbersController, deleteCustomerContactNumberController, customerDeliveryAddressAddController, customerDeliveryAddressUpdateController, getSinglecustomerDeliveryAddressController, getAllcustomerDeliveryAddresssController, deletecustomerDeliveryAddressController, addSalesOrderController, getSingleSalesOrderController, getAllSalesOrderController, getSingleSalesOrderDataController, addSalesReturnOrderController, getSingleSalesReturnOrderController, getAllSalesReturnOrderController, getSingleSalesReturnOrderDataController, getProductStocksForWareHouseController } = require("../controllers/saleController");
const { getAllWarehouseController } = require("../controllers/inventoryController");
const { getSingleProductController } = require("../controllers/purchaseController");

//Customer
router.post("/Customer/add", [validateToken, validAccess], customerAddController);
router.put("/Customer/update/:id", [validateToken, validAccess], customerUpdateController);
router.get("/Customer/getSingle/:id", [validateToken, validAccess], getSingleCustomerController);
router.get("/Customer/getAll", [validateToken, validAccess], getAllCustomerController);

//Customer contact Number
router.post("/Customer/contactNumber/add", [validateToken, validAccess], customerContactNumberAddController);
router.put("/Customer/contactNumber/update/:id", [validateToken, validAccess], customerContactNumberUpdateController);
router.get("/Customer/contactNumber/getSingle/:id", [validateToken, validAccess], getSingleCustomerContactNumberController);
router.get("/Customer/contactNumber/getAll/:id", [validateToken, validAccess], getAllCustomerContactNumbersController);
router.delete("/Customer/contactNumber/delete/:id", [validateToken, validAccess], deleteCustomerContactNumberController);

//Customer store Number
router.post("/Customer/deliveryAddress/add", [validateToken, validAccess], customerDeliveryAddressAddController);
router.put("/Customer/deliveryAddress/update/:id", [validateToken, validAccess], customerDeliveryAddressUpdateController);
router.get("/Customer/deliveryAddress/getSingle/:id", [validateToken, validAccess], getSinglecustomerDeliveryAddressController);
router.get("/Customer/deliveryAddress/getAll/:id", [validateToken, validAccess], getAllcustomerDeliveryAddresssController);
router.delete("/Customer/deliveryAddress/delete/:id", [validateToken, validAccess], deletecustomerDeliveryAddressController);


//Sales orders
router.post("/salesOrder/add", [validateToken, validAccess], addSalesOrderController);
router.get("/salesOrder/getSingle/:id", [validateToken, validAccess], getSingleSalesOrderController);
router.get("/salesOrder/getAll/", [validateToken, validAccess], getAllSalesOrderController);
router.get("/salesOrderData/get/:id", [validateToken, validAccess], getSingleSalesOrderDataController);
router.post("/productstockLevelForWarehouse/get/:id", [validateToken, validAccess], getProductStocksForWareHouseController);



//Sales Return orders
router.post("/salesReturnOrder/add", [validateToken, validAccess], addSalesReturnOrderController);
router.get("/salesReturnOrder/getSingle/:id", [validateToken, validAccess], getSingleSalesReturnOrderController);
router.get("/salesReturnOrder/getAll/", [validateToken, validAccess], getAllSalesReturnOrderController);
router.get("/salesReturnOrderData/get/:id", [validateToken, validAccess], getSingleSalesReturnOrderDataController);

//get All Warehouses
router.get("/Warehouse/getAll/", [validateToken, validAccess], getAllWarehouseController);

//get single product from id
router.get("/product/getSingle/:id", [validateToken, validAccess], getSingleProductController);


module.exports = router;