const db = require("../helpers/db");
const today = require("../helpers/today");
const _ = require("underscore");
const query = require("../helpers/mysqlPromise");

//Employee-add,update,getone,getAll
exports.employeeAddController = async (req, res) => {
    const { DOB, fName, lName, bankName, accountNo, branchCode, branchName, NIC, passportNo, gender, designation, department, basicSalary, dailyWage } = req.body;
    db.query("insert into Employee(DOB,fName,lName,bankName,accountNo,branchCode,branchName,NIC,passportNo,gender,designation,department,basicSalary,dailyWage) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [DOB, fName, lName, bankName, accountNo, branchCode, branchName, NIC, passportNo, gender, designation, department, basicSalary, dailyWage], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            const id = result.insertId;
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add an Employee(EID-" + id + ")"], (err, response) => { });
            res.json("Employee Added");


        }
    })
};

exports.employeeUpdateController = async (req, res) => {
    const id = req.params.id;
    const { DOB, fName, lName, bankName, accountNo, branchCode, branchName, NIC, passportNo, gender, designation, department, basicSalary, dailyWage } = req.body;
    db.query("update Employee set DOB=?,fName=?,lName=?,bankName=?,accountNo=?,branchCode=?,branchName=?,NIC=?,passportNo=?,gender=?,designation=?,department=?,basicSalary=?,dailyWage=? where EID=?", [DOB, fName, lName, bankName, accountNo, branchCode, branchName, NIC, passportNo, gender, designation, department, basicSalary, dailyWage, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Update an Employee Information(EID-" + id + ")"], (err, response) => { });
            res.json("Employee details Updated");
        }
    })
};

exports.employeeGetSingleController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from Employee where EID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view an Employee Information(EID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};

exports.employeeGetAllController = async (req, res) => {
    db.query("select * from Employee", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all Employee"], (err, response) => { });
            res.json(result);
        }
    })
};


//dependent-add,update,getone,getAll

exports.dependentAddController = async (req, res) => {
    const { EID, name, contactNo, DOB, gender, relationship } = req.body;
    db.query("insert into dependent(EID,name,contactNo,DOB,gender,relationship) values(?,?,?,?,?,?)", [EID, name, contactNo, DOB, gender, relationship], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            const id = result.insertId;
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a Dependent(DID-" + id + ")"], (err, response) => { });
            res.json("Dependent Added");


        }
    })
};

exports.dependentUpdateController = async (req, res) => {
    const id = req.params.id;
    const { EID, name, contactNo, DOB, gender, relationship } = req.body;
    db.query("update dependent set EID=?,name=?,contactNo=?,DOB=?,gender=?,relationship=? where DID=?", [EID, name, contactNo, DOB, gender, relationship, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Update a Dependent Information(DID-" + id + ")"], (err, response) => { });
            res.json("Dependent details Updated");
        }
    })
};

exports.dependentGetSingleController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from dependent where DID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a dependent Information(DID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};

exports.dependentGetAllController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from dependent where EID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all dependents for an Employee(EID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};

//OTdata-Add,update,viewone,viewAll
exports.otDataAddController = async (req, res) => {
    const { type, payPerHour } = req.body;
    db.query("insert into otData(type,payPerHour) values(?,?)", [type, payPerHour], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            const id = result.insertId;
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a OT Type(otID-" + id + ")"], (err, response) => { });
            res.json("OT type Added");


        }
    })
};

exports.otDataUpdateController = async (req, res) => {
    const id = req.params.id;
    const { type, payPerHour } = req.body;
    db.query("update otData set type=?,payPerHour=? where otID=?", [type, payPerHour, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Update a OT Type(otID-" + id + ")"], (err, response) => { });
            res.json("OT Type Updated");
        }
    })
};

exports.otDataGetSingleController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from otData where otID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a OT Type(otID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};

exports.otDataGetAllController = async (req, res) => {
    db.query("select * from  otData", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all OT Types"], (err, response) => { });
            res.json(result);
        }
    })
};

//OT-add,view,viewAllforOneEmployee,ViewAll
exports.otAddController = async (req, res) => {
    const { EID, hours, otID } = req.body;
    db.query("select * from otData where otID=?", [otID], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            const payPerHour = result[0].payPerHour;
            const total = payPerHour * hours;
            db.query("insert into OT(EID,hours,otID,payPerHour,total,date) values(?,?,?,?,?,?)", [EID, hours, otID, payPerHour, total, today], (err, result) => {
                if (err) {
                    res.json({ error: err });
                } else {

                    const id = result.insertId;
                    db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a OT(OID-" + id + ")"], (err, response) => { });
                    res.json("OT Added");

                }
            })

        }
    })
};



exports.otGetSingleController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from OT where OID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a OT (OID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};

exports.otGetAllForEmployeeController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from OT where EID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all OT for Employee (EID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};

exports.otGetAllController = async (req, res) => {
    db.query("select * from  OT", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all OT"], (err, response) => { });
            res.json(result);
        }
    })
};

//advance-add,checkBalance,getSingle,getAll,getAlloneEmployee

exports.advanceAddController = async (req, res) => {
    const { amount, EID } = req.body;

    var t = new Date();
    var dd = String(t.getDate()).padStart(2, '0');
    var mm = String(t.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = t.getFullYear();
    t = yyyy + '-' + mm + '-' + dd;
    const startDate = yyyy + '-' + mm + '-' + 01;
    const endDate = yyyy + '-' + mm + '-' + 31;

    db.query("select * from  Employee where EID=?", [EID], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            if (_.isNull(result[0].basicSalary)) {
                //dailywage
                db.query("select sum(amount) as tot from Advance where EID=? and Date=?", [EID, today], (err, result1) => {
                    if (err) {
                        res.json({ error: err });
                    } else {
                        if ((result[0].dailyWage - result1[0].tot) > amount) {
                            db.query("insert into Advance (Date,amount,EID,UID) values(?,?,?,?)", [today, amount, EID, req.user.id], (err, result2) => {
                                if (err) {
                                    res.json({ error: err });
                                } else {

                                    const id = result2.insertId;
                                    db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Give an advance(adID-" + id + ")"], (err, response) => { });
                                    res.json("Give an advance");

                                }
                            })

                        } else {
                            res.json({ error: "Maxmimum amount reached" });
                        }
                    }
                })

            } else {
                //basicSalary
                db.query("select sum(amount) as tot from Advance where (EID=?) and (Date between ? and ?)", [EID, startDate, endDate], (err, result1) => {
                    if (err) {
                        res.json({ error: err });
                    } else {
                        if ((result[0].basicSalary - result1[0].tot) > amount) {
                            db.query("insert into Advance (Date,amount,EID,UID) values(?,?,?,?)", [today, amount, EID, req.user.id], (err, result2) => {
                                if (err) {
                                    res.json({ error: err });
                                } else {

                                    const id = result2.insertId;
                                    db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Give an advance(adID-" + id + ")"], (err, response) => { });
                                    res.json("Give an advance");

                                }
                            })

                        } else {
                            res.json({ error: "Maxmimum amount reached" });
                        }
                    }
                });
            }

        }
    });
}

exports.getAvailableAdvanceController = async (req, res) => {
    const id = req.params.id;

    var t = new Date();
    var dd = String(t.getDate()).padStart(2, '0');
    var mm = String(t.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = t.getFullYear();
    t = yyyy + '-' + mm + '-' + dd;
    const startDate = yyyy + '-' + mm + '-' + 01;
    const endDate = yyyy + '-' + mm + '-' + 31;

    db.query("select * from  Employee where EID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            if (_.isNull(result[0].basicSalary)) {
                // //dailywage
                db.query("select sum(amount) as tot from Advance where EID=? and Date=?", [id, today], (err, result1) => {
                    if (err) {
                        res.json({ error: err });
                    } else {
                        const amount = result[0].dailyWage - result1[0].tot;
                        db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Give remaining advance payment amount (EID-" + id + ")"], (err, response) => { });
                        res.json({ "amount": amount });
                    }
                });

            } else {
                //basicSalary
                db.query("select sum(amount) as tot from Advance where (EID=?) and (Date between ? and ?)", [id, startDate, endDate], (err, result1) => {
                    if (err) {
                        res.json({ error: err });
                    } else {
                        const amount = result[0].basicSalary - result1[0].tot;
                        db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Give remaining advance payment amount (EID-" + id + ")"], (err, response) => { });
                        res.json({ "amount": amount });
                    }
                });
            }

        }
    });
}

exports.getAllAdvanceController = async (req, res) => {
    db.query("select * from Advance", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "View All advance payments"], (err, response) => { });
            res.json(result);
        }
    });
}

exports.getSingleAdvanceController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from Advance where adID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "View an advance payment(adID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}

exports.getAllAdvanceForEmployeeController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from Advance where EID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "View all advance payment for an Employee(EID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}

//attendance-add,viewSingle,viewAll

exports.addAttendanceController = async (req, res) => {
    const { data } = req.body;
    db.beginTransaction();

    for (let i = 0; i < data.length; i++) {
        try {
            result = await query("insert into Attendance(EID,date,inTime,outTime) values(?,?,?,?)", [data[i].EID, data[i].date, data[i].inTime, data[i].outTime]);
        } catch (e) {
            db.rollback();
            return res.json({ error: e });
        }

    }
    db.commit();
    db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add Employee Attendance"], (err, response) => { });
    res.json("Employee attnedance added");
}

exports.viewSingleEmployeeAttendanceController = async (req, res) => {
    const id = req.params.id;
    const { startDate, endDate } = req.body;
    db.query("select * from Attendance where EID=? and (date  between ? and ?)", [id, startDate, endDate], (err, result) => {
        db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "View an Employee Attendance(EID-" + id + ")"], (err, response) => { });
        res.json(result);
    });
}

exports.viewAllAttendanceController = async (req, res) => {

    db.query("select * from Attendance ", (err, result) => {
        db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "View All Employee Attendance"], (err, response) => { });
        res.json(result);
    });
}

//salaray--calculate,viewOne,viewAllforEmp,viewAll

exports.calculateSalaryController = async (req, res) => {

    var t = new Date();
    var dd = String(t.getDate()).padStart(2, '0');
    var mm = String(t.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = t.getFullYear();
    const startDate = yyyy + '-' + mm + '-' + 01;
    const endDate = yyyy + '-' + mm + '-' + 31;
    if (dd == 25) {
        var addInsentiive, dataAllowance, travellingAllowance;

        try {
            res1 = await query("select * from charges where ID=2");
            addInsentiive = res1[0].amount;

            res2 = await query("select * from charges where ID=3");
            dataAllowance = res2[0].amount;

            res3 = await query("select * from charges where ID=4");
            travellingAllowance = res3[0].amount;
        } catch (e) {
            res.json({ error: e });
            return;

        }


        db.query("select * from Employee where dailyWage IS NULL", (err, result) => {
            if (err) {
                res.json({ error: err });
                return;
            } else {
                for (let i = 0; i < result.length; i++) {
                    const basicSalary = result[i].basicSalary;
                    const consolidatedSalary = basicSalary + addInsentiive + dataAllowance + travellingAllowance;
                    const EPF = basicSalary * 8 / 100;
                    const EPFCompany = basicSalary * 12 / 100;
                    const ETF = basicSalary * 3 / 100;
                    const EID = result[i].EID;


                    db.query("select sum(total) as tot from OT where EID=? and (date between ? and ?)", [EID, startDate, endDate], (err, result1) => {
                        if (err) {
                            res.json({ error: err });
                            return;
                        }
                        const totOT = result1[0].tot;
                        db.query("select sum(amount) as tot from Advance where EID=? and (Date between ? and ?)", [EID, startDate, endDate], (err, result1) => {
                            if (err) {
                                res.json({ error: err });
                                return;
                            }
                            const totAdvance = result1[0].tot;
                            const totalSalary = consolidatedSalary + totOT - EPF - totAdvance;
                            let tax;
                            if (totalSalary > 250000) {
                                tax = totalSalary * 10 / 100;
                            } else {
                                tax = 0;
                            }
                            const netSalary = totalSalary - tax;
                            db.query("insert into Salary(EID,month,year,basicSalary,addInsentiive,dataAllowance,travellingAllowance,consolidatedSalary,EPF,ETF,totOT,totAdvance,totalSalry,tax,netSalary,EPFCompany) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [EID, mm, yyyy, basicSalary, addInsentiive, dataAllowance, travellingAllowance, consolidatedSalary, EPF, ETF, totOT, totAdvance, totalSalary, tax, netSalary, EPFCompany], (err, response) => {
                                if (err) {
                                    res.json({ error: err });
                                    return;
                                }
                            });
                        });
                    });
                }
                db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Salary calculated"], (err, response) => { });
                res.json("Salary calculated");
            }

        });

    } else {
        res.json("Can not calculate salry til 25th");
    }

}

exports.viewAllSalaryController = async (req, res) => {
    db.query("select * from Salary ", (err, result) => {
        db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "View All Salaries"], (err, response) => { });
        res.json(result);
    });
}

exports.viewSingleSalaryController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from Salary where SID=?", id, (err, result) => {
        db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "View a Salary(SID-" + id + ")"], (err, response) => { });
        res.json(result);
    });
}

exports.viewAllSalaryForEmployeeController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from Salary where EID=?", id, (err, result) => {
        db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "View all Salaries for an Employee(EID-" + id + ")"], (err, response) => { });
        res.json(result);
    });
}

