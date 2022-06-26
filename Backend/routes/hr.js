const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/auth");
const validAccess = require("../middleware/hrManager");

const { employeeAddController, employeeUpdateController, employeeGetSingleController, employeeGetAllController, dependentAddController, dependentUpdateController, dependentGetSingleController, dependentGetAllController, otDataAddController, otDataUpdateController, otDataGetSingleController, otDataGetAllController, otAddController, otGetSingleController, otGetAllForEmployeeController, otGetAllController, advanceAddController, getAvailableAdvanceController, getAllAdvanceController, getSingleAdvanceController, getAllAdvanceForEmployeeController, addAttendanceController, viewSingleEmployeeAttendanceController, viewAllAttendanceController, calculateSalaryController, viewAllSalaryForEmployeeController, viewSingleSalaryController, viewAllSalaryController, getAllEmployeeEIDController } = require("../controllers/hrController");

//employee
router.post("/employee/add", [validateToken, validAccess], employeeAddController);
router.put("/employee/update/:id", [validateToken, validAccess], employeeUpdateController);
router.get("/employee/getSingle/:id", [validateToken, validAccess], employeeGetSingleController);
router.get("/employee/getAll/", [validateToken, validAccess], employeeGetAllController);
router.get("/employee/getAllEID/", [validateToken, validAccess], getAllEmployeeEIDController);

//dependent
router.post("/dependent/add", [validateToken, validAccess], dependentAddController);
router.put("/dependent/update/:id", [validateToken, validAccess], dependentUpdateController);
router.get("/dependent/getSingle/:id", [validateToken, validAccess], dependentGetSingleController);
router.get("/dependent/getAll/:id", [validateToken, validAccess], dependentGetAllController);

//OT Types
router.post("/OtType/add", [validateToken, validAccess], otDataAddController);
router.put("/otType/update/:id", [validateToken, validAccess], otDataUpdateController);
router.get("/otType/getSingle/:id", [validateToken, validAccess], otDataGetSingleController);
router.get("/otType/getAll/", [validateToken, validAccess], otDataGetAllController);

//OT
router.post("/Ot/add", [validateToken, validAccess], otAddController);
router.get("/Ot/getSingle/:id", [validateToken, validAccess], otGetSingleController);
router.get("/Ot/getAllForEmployee/:id", [validateToken, validAccess], otGetAllForEmployeeController);
router.get("/Ot/getAll/", [validateToken, validAccess], otGetAllController);

//advance
router.post("/advance/add", [validateToken, validAccess], advanceAddController);
router.get("/advance/balance/:id", [validateToken, validAccess], getAvailableAdvanceController);
router.get("/advance/getAll/", [validateToken, validAccess], getAllAdvanceController);
router.get("/advance/getSingle/:id", [validateToken, validAccess], getSingleAdvanceController);
router.get("/advance/getAllForEmployee/:id", [validateToken, validAccess], getAllAdvanceForEmployeeController);

//attendance
router.post("/attendance/add", [validateToken, validAccess], addAttendanceController);
router.get("/attendance/getAll/", [validateToken, validAccess], viewAllAttendanceController);
router.get("/attendance/getSingle/:id", [validateToken, validAccess], viewSingleEmployeeAttendanceController);


//salary
router.get("/salary/calculate", [validateToken, validAccess], calculateSalaryController);
router.get("/salary/getAll", [validateToken, validAccess], viewAllSalaryController);
router.get("/salary/getSingle/:id", [validateToken, validAccess], viewSingleSalaryController);
router.get("/salary/getAllForEmployee/:id", [validateToken, validAccess], viewAllSalaryForEmployeeController);



module.exports = router;

