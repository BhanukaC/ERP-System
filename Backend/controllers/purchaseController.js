const db = require("../helpers/db");
const today = require("../helpers/today");
const query = require("../helpers/mysqlPromise");
const mailer = require('../helpers/mailer');
const hbs = require('nodemailer-handlebars');

//category-add,update,getOne,getAll
exports.categoryAddController = async (req, res) => {
    const { categoryName } = req.body;
    db.query("insert into category(categoryName) values(?)", [categoryName], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            const id = result.insertId;
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a category(catID-" + id + ")"], (err, response) => { });
            res.json("category Added");


        }
    })
};


exports.categoryUpdateController = async (req, res) => {
    const id = req.params.id;
    const { categoryName } = req.body;
    db.query("update category set categoryName=? where catID=?", [categoryName, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "update a category(catID-" + id + ")"], (err, response) => { });
            res.json("category updated");
        }
    })
};


exports.getSingleCategoryController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from category where catID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a category(catID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};


exports.getAllCategoryController = async (req, res) => {
    db.query("select * from category ", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all categories "], (err, response) => { });
            res.json(result);
        }
    })
};

//subCategory - add,update,getOne,getAll

exports.subCategoryAddController = async (req, res) => {
    const { catID, subCategoryName, discount } = req.body;
    db.query("insert into subCategory(catID,subCategoryName,discount) values(?,?,?)", [catID, subCategoryName, discount], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            const id = result.insertId;
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a subCategory(SCID-" + id + ")"], (err, response) => { });
            res.json("subCategory Added");


        }
    })
};


exports.subCategoryUpdateController = async (req, res) => {
    const id = req.params.id;
    const { catID, subCategoryName, discount } = req.body;
    db.query("update subCategory set catID=? ,subCategoryName=? ,discount=? where SCID=?", [catID, subCategoryName, discount, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "update a subCategory(SCID-" + id + ")"], (err, response) => { });
            res.json("subCategory updated");
        }
    })
};


exports.getSingleSubCategoryController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from subCategory where SCID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a subCategory(SCID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};


exports.getAllSubCategoryController = async (req, res) => {
    db.query("select * from subCategory ", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all subCategories "], (err, response) => { });
            res.json(result);
        }
    })
};

//products - add,update,getOne,getAll

exports.productAddController = async (req, res) => {
    const { PName, sellingPrice, EANCode, UnitOfMeasure, HSNCode, shortDescription, longDescription, Height, Length, Weight, buyingPrice, NoOfItems, CatID, SubCatID } = req.body;
    db.query("insert into Product(PName, sellingPrice, EANCode, UnitOfMeasure, HSNCode, shortDescription, longDescription, Height, Length, Weight, buyingPrice, NoOfItems, CatID, SubCatID) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [PName, sellingPrice, EANCode, UnitOfMeasure, HSNCode, shortDescription, longDescription, Height, Length, Weight, buyingPrice, NoOfItems, CatID, SubCatID], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            const id = result.insertId;
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a product(PID-" + id + ")"], (err, response) => { });
            res.json("product Added");


        }
    })
};


exports.productUpdateController = async (req, res) => {
    const id = req.params.id;
    const { PName, sellingPrice, EANCode, UnitOfMeasure, HSNCode, shortDescription, longDescription, Height, Length, Weight, buyingPrice, NoOfItems, CatID, SubCatID } = req.body;
    db.query("update Product set PName=? ,sellingPrice=?,EANCode=?,UnitOfMeasure=?,HSNCode=?,shortDescription=?,longDescription=?,Height=?,Length=?,Weight=?,buyingPrice=?,NoOfItems=?,CatID=?,SubCatID=? where PID=?", [PName, sellingPrice, EANCode, UnitOfMeasure, HSNCode, shortDescription, longDescription, Height, Length, Weight, buyingPrice, NoOfItems, CatID, SubCatID, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "update a product(PID-" + id + ")"], (err, response) => { });
            res.json("product updated");
        }
    })
};


exports.getSingleProductController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from Product where PID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a product(PID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};


exports.getAllProductController = async (req, res) => {
    db.query("select * from Product ", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all products "], (err, response) => { });
            res.json(result);
        }
    })
};

//Supplier - add,update,getOne,getAll


exports.supplierAddController = async (req, res) => {
    const { sName, paymentTerm, no, street, town, country, returnTerm, deliveryTerm, email } = req.body;
    db.query("insert into Supplier(sName, paymentTerm, no, street, town, country, returnTerm, deliveryTerm, email) values(?,?,?,?,?,?,?,?,?)", [sName, paymentTerm, no, street, town, country, returnTerm, deliveryTerm, email], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            const id = result.insertId;
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a supplier(SID-" + id + ")"], (err, response) => { });
            res.json("supplier Added");


        }
    })
};


exports.supplierUpdateController = async (req, res) => {
    const id = req.params.id;
    const { sName, paymentTerm, no, street, town, country, returnTerm, deliveryTerm, email } = req.body;
    db.query("update Supplier set sName=? ,paymentTerm=? ,no=? ,street=?,town=?,country=?,returnTerm=?,deliveryTerm=?,email=? where SID=?", [sName, paymentTerm, no, street, town, country, returnTerm, deliveryTerm, email, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "update a supplier(SID-" + id + ")"], (err, response) => { });
            res.json("supplier updated");
        }
    })
};


exports.getSingleSupplierController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from Supplier where SID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a supplier(SID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};


exports.getAllSupplierController = async (req, res) => {
    db.query("select * from Supplier ", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all Suppliers "], (err, response) => { });
            res.json(result);
        }
    })
};

//SupplierContactNumber- add,update,getOne,getAll,delete
exports.supplierContactNumberAddController = async (req, res) => {
    const { SID, contactNumber } = req.body;
    db.query("insert into SupplierContactNumber(SID,ContactNumber) values(?,?)", [SID, contactNumber], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            const SCID = result.insertId;
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a supplier contact Number(SCID-" + SCID + ")"], (err, response) => { });
            res.json("supplier Contact Number Added");


        }
    })
};


exports.supplierContactNumberUpdateController = async (req, res) => {
    const id = req.params.id;
    const { SID, contactNumber } = req.body;
    db.query("update SupplierContactNumber set SID=?,contactNumber=?  where SCID=?", [SID, contactNumber, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "update a supplier Contact Number(SCID-" + id + ")"], (err, response) => { });
            res.json("supplier Contact Number updated");
        }
    })
};


exports.getSingleSupplierContactNumberController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from SupplierContactNumber where SCID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a supplier Contact Number(SCID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};


exports.getAllSupplierContactNumbersController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from SupplierContactNumber where SID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all Supplier Contact Numbers(SID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};

exports.deleteSupplierContactNumberController = async (req, res) => {
    const id = req.params.id;
    db.query("delete from SupplierContactNumber where SCID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "deleted a supplier Contact Number(SCID-" + id + ")"], (err, response) => { });
            res.json("supplier Contact Number deleted");
        }
    })
};

//SupplierStoreLocation-add,update,getOne,getAll,delete

exports.supplierStoreLocationAddController = async (req, res) => {
    const { no, country, town, street, SID } = req.body;
    db.query("insert into SupplierStoreLocation(no, country, town, street, SID) values(?,?,?,?,?)", [no, country, town, street, SID], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            const id = result.insertId;
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a supplier store Location(SSLID-" + id + ")"], (err, response) => { });
            res.json("supplier Store Location Added");


        }
    })
};


exports.supplierStoreLocationUpdateController = async (req, res) => {
    const id = req.params.id;
    const { no, country, town, street, SID } = req.body;
    db.query("update SupplierStoreLocation set no=?,country=?,town=?,street=?,SID=?  where SSLID=?", [no, country, town, street, SID, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "update a supplier Store Location(SSLID-" + id + ")"], (err, response) => { });
            res.json("supplier Store Location updated");
        }
    })
};


exports.getSingleSupplierStoreLocationController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from SupplierStoreLocation where SSLID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a supplier Store Location(SSLID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};


exports.getAllSupplierStoreLocationsController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from SupplierStoreLocation where SID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all Supplier Store Locations(SID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};

exports.deleteSupplierStoreLocationController = async (req, res) => {
    const id = req.params.id;
    db.query("delete from SupplierStoreLocation where SSLID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "deleted a supplier Store Location(SSLID-" + id + ")"], (err, response) => { });
            res.json("supplier Store Location deleted");
        }
    })
};

//purchase order
exports.addPurchaseOrderController = async (req, res) => {
    const { SID, SSLID, SCID, WID, items } = req.body;
    const products = [];

    for (let i = 0; i < items.length; i++) {
        try {
            result = await query("select * from Product where PID=?", [items[i].PID]);
            products.push({
                PID: items[i].PID,
                unitPrice: result[0].buyingPrice,
                qty: items[i].qty,
                discount: items[i].discount,
                netTot: result[0].buyingPrice * items[i].qty * (100 - items[i].discount) / 100,
                name: result[0].PName
            });
        } catch (e) {
            res.json({ error: e });
        }
    }
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].netTot;
    }
    db.query("insert into purchaseOrder(orderDate,total,SID,SSLID,SCID,WID) values(?,?,?,?,?,?)", [today, total, SID, SSLID, SCID, WID], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            const id = result.insertId;
            for (let i = 0; i < products.length; i++) {
                try {
                    query("insert into purchaseOrderData(PID,purchaseOrderID,unitPrice,qty,discount,netTot) values(?,?,?,?,?,?)", [products[i].PID, id, products[i].unitPrice, products[i].qty, products[i].discount, products[i].netTot]);
                } catch (e) {
                    res.json({ error: e });
                }
            }
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a purchase order(purchaseOrderID-" + id + ")"], (err, response) => { });


            mailer.use('compile', hbs({
                viewEngine: {
                    extname: '.handlebars',
                    layoutsDir: '../Backend/views/',
                    defaultLayout: 'purchaseOrder',
                },
                viewPath: '../Backend/views/'
            }));

            db.query("select * from Supplier where SID=?", [SID], (err, res1) => {
                if (err) {
                    res.json({ error: err });
                } else {
                    let toMail = res1[0].email;
                    let sname = res1[0].sName;
                    let subject = "New Order from company ID-" + id;
                    let date = today;
                    db.query("select * from SupplierContactNumber where SCID=?", [SCID], (err, res2) => {
                        if (err) {
                            res.json({ error: err });
                        } else {
                            let contactNumber = res2[0].contactNumber;
                            db.query("select * from SupplierStoreLocation where SSLID=?", [SSLID], (err, res3) => {
                                if (err) {
                                    res.json({ error: err });
                                } else {
                                    let Sno = res3[0].no;
                                    let Sstreet = res3[0].street;
                                    let Stown = res3[0].town;
                                    let Scountry = res3[0].country;

                                    db.query("select * from Warehouse where WID=?", [WID], (err, res4) => {
                                        if (err) {
                                            res.json({ error: err });
                                        } else {
                                            let Wno = res4[0].no;
                                            let Wstreet = res4[0].street;
                                            let Wtown = res4[0].town;

                                            let mailOptions = {
                                                from: 'info@codewithx.com', // TODO: email sender
                                                to: toMail, // TODO: email receiver
                                                subject: subject,
                                                template: 'purchaseOrder',
                                                context: {
                                                    id: id,
                                                    date: date,
                                                    Sname: sname,
                                                    Sno: Sno, Sstreet: Sstreet, Stown: Stown, Scountry: Scountry,
                                                    contactNumber: contactNumber,
                                                    Wno: Wno, Wstreet: Wstreet, Wtown: Wtown,
                                                    total: total,
                                                    items: products,

                                                } // send extra values to template
                                            };

                                            mailer.sendMail(mailOptions, (err, data) => {
                                                if (err) {
                                                    console.log(err);
                                                    return console.log('Error occurs');
                                                }


                                                res.json("purchase order added");
                                            });


                                        }

                                    })

                                }

                            })

                        }
                    })

                }

            })


        }

    });
}

//purchaseOrder-view all,view one
//purchaseOrderData-view one(related to a purchase order)

exports.getSinglePurchaseOrderController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from purchaseOrder where purchaseOrderID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a purchase order(purchaseOrderID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}

exports.getAllPurchaseOrderController = async (req, res) => {
    db.query("select * from purchaseOrder ", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all purchase orders"], (err, response) => { });
            res.json(result);
        }
    });
}


exports.getSinglePurchaseOrderDataController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from purchaseOrderData where purchaseOrderID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a purchaseorderData(purchaseOrderID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}