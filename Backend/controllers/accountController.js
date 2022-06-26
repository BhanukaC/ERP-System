const db = require("../helpers/db");


exports.getTotalSalesAmountController = async (req, res) => {
    db.query("select sum(netTotal) as sum from SalesOrder", (err, response) => {
        if (err) {
            res.json(err);
        } else {
            let sum = response[0].sum;
            res.json(sum);
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Get sum of sales orders"], (err, response) => {
            });
        }
    })
}

exports.getTotalPurchaseAmountController = async (req, res) => {
    db.query("select sum(total) as sum from purchaseOrder", (err, response) => {
        if (err) {
            res.json(err);
        } else {
            let sum = response[0].sum;
            res.json(sum);
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Get sum of purchase orders"], (err, response) => {
            });
        }
    })
}


exports.getTotalSalaryController = async (req, res) => {
    db.query("select sum(netSalary) as sum from Salary", (err, response) => {
        if (err) {
            res.json(err);
        } else {
            let sum = response[0].sum;
            res.json(sum);
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Get sum of net salaries"], (err, response) => {
            });
        }
    })
}


exports.getTotalGrossSalaryController = async (req, res) => {
    db.query("select sum(basicSalary+addInsentiive+dataAllowance+travellingAllowance+totOT) as sum from Salary", (err, response) => {
        if (err) {
            res.json(err);
        } else {
            let sum = response[0].sum;
            res.json(sum);
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Get sum of gross salaries"], (err, response) => {
            });
        }
    })
}

exports.getTotalEPFController = async (req, res) => {
    db.query("select sum(EPF) as sum from Salary", (err, response) => {
        if (err) {
            res.json(err);
        } else {
            let sum = response[0].sum;
            res.json(sum);
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Get sum of EPF"], (err, response) => {
            });
        }
    })
}

exports.getTotalETFController = async (req, res) => {
    db.query("select sum(EPF)  as sum from Salary", (err, response) => {
        if (err) {
            res.json(err);
        } else {
            let sum = response[0].sum;
            res.json(sum);
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Get sum of ETF"], (err, response) => {
            });
        }
    })
}

exports.getTotalAdvanceController = async (req, res) => {
    db.query("select sum(totAdvance) as sum from Salary", (err, response) => {
        if (err) {
            res.json(err);
        } else {
            let sum = response[0].sum;
            res.json(sum);
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Get sum of totAdvance"], (err, response) => {
            });
        }
    })
}

exports.getTotalCompanyEPFController = async (req, res) => {
    db.query("select sum(EPFCompany) as sum from Salary", (err, response) => {
        if (err) {
            res.json(err);
        } else {
            let sum = response[0].sum;
            res.json(sum);
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Get sum of Company EPF"], (err, response) => {
            });
        }
    })
}



