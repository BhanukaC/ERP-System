const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/auth");
const validAccess = require("../middleware/account");

const { getTotalSalesAmountController, getTotalPurchaseAmountController, getTotalSalaryController, getTotalGrossSalaryController, getTotalEPFController,
    getTotalETFController, getTotalAdvanceController } = require("../controllers/accountController");

router.get("/TotalSales/get/", [validateToken, validAccess], getTotalSalesAmountController);
router.get("/TotalPurchases/get/", [validateToken, validAccess], getTotalPurchaseAmountController);
router.get("/TotalNetSalary/get/", [validateToken, validAccess], getTotalSalaryController);
router.get("/TotalGrossSalary/get/", [validateToken, validAccess], getTotalGrossSalaryController);
router.get("/TotalEPF/get/", [validateToken, validAccess], getTotalEPFController);
router.get("/TotalETF/get/", [validateToken, validAccess], getTotalETFController);
router.get("/TotalAdvance/get/", [validateToken, validAccess], getTotalAdvanceController);

module.exports = router;