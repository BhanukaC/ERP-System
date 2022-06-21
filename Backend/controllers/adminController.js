const db = require("../helpers/db");
const bcrypt = require("bcrypt");
const mailer = require('../helpers/mailer');


exports.userRegisterController = async (req, res) => {
    const { username, acessLevel, email, town } = req.body;
    const password = Math.floor((Math.random() * 999999) + 100000).toString();
    await bcrypt.hash(password, 10).then((hash) => {
        db.query("insert into users(userName,password,acessLevel,email,town) values(?,?,?,?,?)", [username, hash, acessLevel, email, town], (err, result) => {
            if (err) {
                res.json({ error: err });
            } else {

                mailer.sendMail(
                    {
                        from: 'info@codewithx.com',
                        to: email, // list of receivers
                        subject: "Your account Password", // Subject line
                        text: "Hi " + username + ",Your account password is " + password, // plain text body
                    }
                );


                const UID = result.insertId;

                db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Created a new user(UID-" + UID + ")"], (err, response) => {

                });
                res.json("User Registered");



            }
        })
    })
};


exports.userUpdateController = async (req, res) => {
    const id = req.params.id;
    const { acessLevel, town } = req.body;
    db.query("update users set acessLevel=?,town=? where UID=?", [acessLevel, town, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "update a user(UID-" + id + ")"], (err, response) => { });
            res.json("User updated");
        }
    })
};

exports.userDeleteController = async (req, res) => {
    const id = req.params.id;
    db.query("delete from users where UID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "deleted a user(UID-" + id + ")"], (err, response) => { });
            res.json("User deleted");
        }
    })
};

exports.getSingleUserController = async (req, res) => {
    const id = req.params.id;
    db.query("select UID,userName,acessLevel,email,town from users where UID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a user(UID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};

exports.getAllUserController = async (req, res) => {
    db.query("select UID,userName,acessLevel,email,town from users ", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all users "], (err, response) => { });
            res.json(result);
        }
    })
};

exports.getAllActivityController = async (req, res) => {
    db.query("select * from activity", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all activty records "], (err, response) => { });
            res.json(result);
        }
    })
};


exports.getSingleActivityController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from activity where ID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a activity record(ID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};

exports.warehouseAddController = async (req, res) => {
    const { ManagerName, no, street, town, UID } = req.body;
    db.query("insert into Warehouse(ManagerName,no,street,town,UID) values(?,?,?,?,?)", [ManagerName, no, street, town, UID], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {


            const WID = result.insertId;

            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a Warehouse(WID-" + WID + ")"], (err, response) => { });
            res.json("Add a new Warehouse");

        }
    });

};

exports.warehouseUpdateController = async (req, res) => {
    const id = req.params.id;
    const { ManagerName, no, street, town, UID } = req.body;
    db.query("update Warehouse set ManagerName=?,no=?,street=?,town=?,UID=? where WID=?", [ManagerName, no, street, town, UID, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Update a Warehouse(WID-" + id + ")"], (err, response) => { });
            res.json("update Warehouse Details");

        }
    });
};

exports.getSingleWarehouseController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from Warehouse where WID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "View a Warehouse(WID-" + id + ")"], (err, response) => { });
            res.json(result);

        }
    });
};

exports.getAllWarehouseController = async (req, res) => {
    db.query("select * from Warehouse", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "View all Warehouses"], (err, response) => { });
            res.json(result);

        }
    });
};

exports.setDiscountForCustomer = async (req, res) => {
    const { PID, CID, discount } = req.body;
    db.query("insert into discounts(PID,CID,discount) values(?,?,?)", [PID, CID, discount], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add Product Discount(PID-" + PID + ") for customer(CID+" + ")"], (err, response) => { });
            res.json("Discount added");
        }
    })
}

exports.setDiscountForSubCategory = async (req, res) => {
    const { SCID, discount } = req.body;
    db.query("update subCategory set discount=? where SCID=?", [discount, SCID], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add Discount for Sub category(SCID-" + SCID + ")"], (err, response) => { });
            res.json("Discount added");
        }
    })
}


//view all sales return orders
exports.getAllSalesReturnOrderController = async (req, res) => {
    db.query("select * from SalesReturnOrder where status='P'", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all sales Return orders"], (err, response) => { });
            res.json(result);
        }
    });
}

exports.acceptSalesReturnOrderController = async (req, res) => {
    const { salesReturnOrderID, status } = req.body;
    db.query("update SalesReturnOrder set status=? where salesReturnOrderID=?", [status, salesReturnOrderID], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Update Sales Return Order status(salesReturnOrderID-" + salesReturnOrderID + ")"], (err, response) => { });
            res.json("Sales Return Order Updated");
        }
    });
}


exports.resetPasswordForUser = async (req, res) => {
    const id = req.params.id;
    let email, username;
    await db.query("select * from users where UID=?", [id], (err, result1) => {
        if (err) {
            res.json({ error: err });
        } else {
            email = result1[0].email;
            username = result1[0].userName;
        }
    })
    const password = Math.floor((Math.random() * 999999) + 100000).toString();
    await bcrypt.hash(password, 10).then((hash) => {
        db.query("update users set password=? where UID=?", [hash, id], (err, result) => {
            if (err) {
                res.json({ error: err });
            } else {

                mailer.sendMail(
                    {
                        from: 'info@codewithx.com',
                        to: email, // list of receivers
                        subject: "Your account New Password", // Subject line
                        text: "Hi " + username + ",Your account password is " + password, // plain text body
                    }
                );

                const UID = result.insertId;

                db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Password Resetted of User(UID-" + UID + ")"], (err, response) => {

                });
                res.json("Password Resseted");



            }
        })
    })

}
