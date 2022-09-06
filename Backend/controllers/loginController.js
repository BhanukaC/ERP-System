const db = require("../helpers/db");
const bcrypt = require("bcrypt");
const createTokens = require("../helpers/jwt");

exports.loginController = async (req, res) => {
    const { username, password } = req.body;
    db.query("select * from users where userName= ?", username, (err, result) => {
        if (err) {
            res.json({ error: err });
        }
        if (!result[0]) {
            res.json({ error: "User Doesn't Exist" });
        }
        else {
            const dbPassword = result[0].password;
            bcrypt.compare(password, dbPassword).then((response) => {
                if (!response) {
                    res.json({ error: "Wrong username and password" });
                } else {
                    const accessToken = createTokens(result[0]);
                    res.cookie("access-token", accessToken, {
                        maxAge: 60 * 60 * 24 * 30,
                        httpOnly: false,
                        sameSite: 'none',
                        secure: true,
                    });
                    db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, result[0].UID, result[0].userName, "Logged into the system"], (err, response) => {

                    });
                    res.json({ message: "Logged In", accessLevel: result[0].acessLevel, token: accessToken });
                }
            });

        }
    })
};


exports.passwordChangeController = async (req, res) => {
    const id = req.user.id;
    const { oldPassword, newPassword } = req.body;
    db.query("select * from users where UID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        }

        if (!result[0]) {
            res.json({ error: "User Doesn't Exist" });
        } else {
            const dbPassword = result[0].password;
            bcrypt.compare(oldPassword, dbPassword).then((response) => {
                if (!response) {
                    res.json({ error: "Wrong password" });
                } else {
                    bcrypt.hash(newPassword, 10).then((hash) => {
                        db.query("update users set password=? where UID=?", [hash, id], (err, result2) => {
                            if (err) {
                                res.json({ error: err });
                            } else {
                                db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Changed Password"], (err, response) => {

                                });
                                res.json("Password changed");
                            }
                        })
                    });
                }
            })
        }


    })
}