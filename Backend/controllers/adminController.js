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
                        from: 'info@codewithx.com', // sender address
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
