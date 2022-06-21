const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/auth");
const validAccess = require("../middleware/warehouseOperator");

const { getProductStocksForWareHouseController,warehouseUpdateController, getSingleWarehouseController, getAllWarehouseController, getSingleInternalShipmentController, getAllInternalShipmentToReceiveController, getAllInternalShipmentToSendController, getSingleInternalShipmentDataController, getAllStockLevelController, getAllStockLevelForWareHouseController, changeQualityLevelController, purchaseOrderUpdateController, salesOrderUpdateController, salesReturnOrderUpdateController, addInternalShipmentController, internalShipmentUpdateController, getSinglePurchaseOrderController, getAllPurchaseOrderController, getSinglePurchaseOrderDataController, getSingleSalesOrderController, getAllSalesOrderController, getSingleSalesOrderDataController, getSingleSalesReturnOrderController, getAllSalesReturnOrderController, getSingleSalesReturnOrderDataController} = require("../controllers/inventoryController");

//Warehouse
router.put("/Warehouse/update/:id", [validateToken, validAccess], warehouseUpdateController);
router.get("/Warehouse/getSingle/:id", [validateToken, validAccess], getSingleWarehouseController);
router.get("/Warehouse/getAll/", [validateToken, validAccess], getAllWarehouseController);

//purchaseOrder
router.get("/purchaseOrder/getSingle/:id", [validateToken, validAccess], getSinglePurchaseOrderController);
router.get("/purchaseOrder/getAll/", [validateToken, validAccess], getAllPurchaseOrderController);
router.get("/purchaseOrderData/get/:id", [validateToken, validAccess], getSinglePurchaseOrderDataController);
router.put("/purchaseOrder/update/", [validateToken, validAccess], purchaseOrderUpdateController);

//salesOrder
router.get("/salesOrder/getSingle/:id", [validateToken, validAccess], getSingleSalesOrderController);
router.get("/salesOrder/getAll/", [validateToken, validAccess], getAllSalesOrderController);
router.get("/salesOrderData/get/:id", [validateToken, validAccess], getSingleSalesOrderDataController);
router.put("/salesOrder/update/", [validateToken, validAccess], salesOrderUpdateController);

//sales Return Order
router.get("/salesReturnOrder/getSingle/:id", [validateToken, validAccess], getSingleSalesReturnOrderController);
router.get("/salesReturnOrder/getAll/", [validateToken, validAccess], getAllSalesReturnOrderController);
router.get("/salesReturnOrderData/get/:id", [validateToken, validAccess], getSingleSalesReturnOrderDataController);
router.put("/salesReturnOrder/update/", [validateToken, validAccess], salesReturnOrderUpdateController);

//internal Shipment
router.post("/internalShipment/add/", [validateToken, validAccess], addInternalShipmentController);
router.put("/internalShipment/update/", [validateToken, validAccess], internalShipmentUpdateController);
router.get("/internalShipment/getSingle/:id", [validateToken, validAccess], getSingleInternalShipmentController);
router.get("/internalShipment/getAllToReceive/:id", [validateToken, validAccess], getAllInternalShipmentToReceiveController);
router.get("/internalShipment/getAllSend/:id", [validateToken, validAccess], getAllInternalShipmentToSendController);
router.get("/internalShipmentData/get/:id", [validateToken, validAccess], getSingleInternalShipmentDataController);

//stock levels
router.get("/stockLevel/getAll/", [validateToken, validAccess], getAllStockLevelController);
router.get("/stockLevelForWarehouse/get/:id", [validateToken, validAccess], getAllStockLevelForWareHouseController);
router.post("/productstockLevelForWarehouse/get/:id", [validateToken, validAccess], getProductStocksForWareHouseController);


//change quality level
router.post("/changeQualityLevel/add", [validateToken, validAccess], changeQualityLevelController);
module.exports = router;
