const db = require("../helpers/db");
const query = require("../helpers/mysqlPromise");
const today = require("../helpers/today");
const _ = require("underscore");
const mailer = require('../helpers/mailer');
const hbs = require('nodemailer-handlebars');

//Customer - add,update,getOne,getAll


exports.customerAddController = async (req, res) => {
    const { customerName, paymentTerm, returnTerm, deliveryTerm, no, street, town, branchCode, accountNo, bankName, email } = req.body;
    db.query("insert into Customer(customerName, paymentTerm, returnTerm, deliveryTerm, no, street, town, branchCode, accountNo, bankName, email) values(?,?,?,?,?,?,?,?,?,?,?)", [customerName, paymentTerm, returnTerm, deliveryTerm, no, street, town, branchCode, accountNo, bankName, email], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            const id = result.insertId;
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a Customer(CID-" + id + ")"], (err, response) => { });
            res.json("Customer Added");


        }
    })
};


exports.customerUpdateController = async (req, res) => {
    const id = req.params.id;
    const { customerName, paymentTerm, returnTerm, deliveryTerm, no, street, town, branchCode, accountNo, bankName, email } = req.body;
    db.query("update Customer set customerName=? ,paymentTerm=?,returnTerm=?,deliveryTerm=?,no=?,street=?,town=?,branchCode=?,accountNo=?,bankName=?,email=? where CID=?", [customerName, paymentTerm, returnTerm, deliveryTerm, no, street, town, branchCode, accountNo, bankName, email, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "update a customer(CID-" + id + ")"], (err, response) => { });
            res.json("customer updated");
        }
    })
};


exports.getSingleCustomerController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from Customer where CID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a Customer(CID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};


exports.getAllCustomerController = async (req, res) => {
    db.query("select * from Customer ", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all Customers "], (err, response) => { });
            res.json(result);
        }
    })
};

//customerContactNumber- add,update,getOne,getAll,delete
exports.customerContactNumberAddController = async (req, res) => {
    const { CID, contactNumber } = req.body;
    db.query("insert into customerContactNumber(CID,contactNumber) values(?,?)", [CID, contactNumber], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            const id = result.insertId;
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a Customer contact Number(CCID-" + id + ")"], (err, response) => { });
            res.json("Customer Contact Number Added");


        }
    })
};


exports.customerContactNumberUpdateController = async (req, res) => {
    const id = req.params.id;
    const { CID, contactNumber } = req.body;
    db.query("update customerContactNumber set CID=?,contactNumber=?  where CCID=?", [CID, contactNumber, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "update a Customer Contact Number(CCID-" + id + ")"], (err, response) => { });
            res.json("Customer Contact Number updated");
        }
    })
};


exports.getSingleCustomerContactNumberController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from customerContactNumber where CCID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a Customer Contact Number(CCID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};


exports.getAllCustomerContactNumbersController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from customerContactNumber where CID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all Customer Contact Numbers(CID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};

exports.deleteCustomerContactNumberController = async (req, res) => {
    const id = req.params.id;
    db.query("delete from customerContactNumber where CCID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "deleted a Customer Contact Number(CCID-" + id + ")"], (err, response) => { });
            res.json("Customer Contact Number deleted");
        }
    })
};

//customerDeliveryAddress-add,update,getOne,getAll,delete

exports.customerDeliveryAddressAddController = async (req, res) => {
    const { CID, no, street, town } = req.body;
    db.query("insert into customerDeliveryAddress(CID, no, street, town) values(?,?,?,?)", [CID, no, street, town], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            const id = result.insertId;
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a Customer Delivery Address(CDAID-" + id + ")"], (err, response) => { });
            res.json("Customer Delivery Address Added");


        }
    })
};


exports.customerDeliveryAddressUpdateController = async (req, res) => {
    const id = req.params.id;
    const { CID, no, street, town } = req.body;
    db.query("update customerDeliveryAddress set CID=?, no=?, street=?, town=?  where CDAID=?", [CID, no, street, town, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "update a Customer Delivery Address(CDAID-" + id + ")"], (err, response) => { });
            res.json("Customer Delivery Address updated");
        }
    })
};


exports.getSinglecustomerDeliveryAddressController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from customerDeliveryAddress where CDAID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a Customer Delivery Address(CDAID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};


exports.getAllcustomerDeliveryAddresssController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from customerDeliveryAddress where CID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all Customer Delivery Addresss(CID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    })
};

exports.deletecustomerDeliveryAddressController = async (req, res) => {
    const id = req.params.id;
    db.query("delete from customerDeliveryAddress where CDAID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "deleted a Customer Delivery Address(CDAID-" + id + ")"], (err, response) => { });
            res.json("Customer Delivery Address deleted");
        }
    })
};


//sales order
exports.addSalesOrderController = async (req, res) => {
    const { WID, CID, CDAID, CCID, distance, items } = req.body;
    const products = [];
    let deliveryCharge = 0;
    try {
        r = await query("select * from charges where ID=?", 1);
        deliveryCharge = distance * r[0].amount;
    } catch (e) {
        res.json({ error: e });
        return;
    }

    for (let i = 0; i < items.length; i++) {
        try {
            result = await query("select * from Product where PID=?", [items[i].PID]);
            let discount1 = await query("select * from subCategory where SCID=?", [result[0].SubCatID]);
            let discount2 = await query("select * from discounts where PID=? and CID=?", [items[i].PID, CID]);
            let totDiscount = 0;
            if (!_.isEmpty(discount1)) {
                totDiscount += discount1[0].discount;
            }
            if (!_.isEmpty(discount2)) {
                totDiscount += discount2[0].discount;
            }

            products.push({
                PID: items[i].PID,
                unitPrice: result[0].sellingPrice,
                qty: items[i].qty,
                discount: totDiscount,
                netTot: result[0].sellingPrice * items[i].qty * (100 - totDiscount) / 100,
                name: result[0].PName
            });
        } catch (e) {
            res.json({ error: e });
            return;
        }
    }
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].netTot;
    }
    db.query("insert into SalesOrder(orderDate,total,CID,CDAID,CCID,WID,deliveryCharge,netTotal) values(?,?,?,?,?,?,?,?)", [today, total, CID, CDAID, CCID, WID, deliveryCharge, total + deliveryCharge], (err, result) => {
        if (err) {
            res.json({ error: err });
            //return;
        } else {

            const id = result.insertId;
            for (let i = 0; i < products.length; i++) {
                try {
                    query("insert into salesOrderData(PID,salesOrderID,unitPrice,qty,discount,netTot) values(?,?,?,?,?,?)", [products[i].PID, id, products[i].unitPrice, products[i].qty, products[i].discount, products[i].netTot]);
                } catch (e) {
                    res.json({ error: e });
                    // return;
                }
            }
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a sales order(salesOrderID-" + id + ")"], (err, response) => { });
            // res.json("sales order added");
            mailer.use('compile', hbs({
                viewEngine: {
                    extname: '.handlebars',
                    layoutsDir: '../Backend/views/',
                    defaultLayout: 'salesOrder',
                },
                viewPath: '../Backend/views/'
            }));

            db.query("select * from Customer where CID=?", [CID], (err, res1) => {
                if (err) {
                    res.json({ error: err });
                } else {
                    let toMail = res1[0].email;
                    let cname = res1[0].customerName;
                    let subject = "New Sales Order from company ID-" + id;
                    let date = today;
                    db.query("select * from customerContactNumber where CCID=?", [CCID], (err, res2) => {
                        if (err) {
                            res.json({ error: err });
                        } else {
                            let contactNumber = res2[0].contactNumber;
                            db.query("select * from customerDeliveryAddress where CDAID=?", [CDAID], (err, res3) => {
                                if (err) {
                                    res.json({ error: err });
                                } else {
                                    let Cno = res3[0].no;
                                    let Cstreet = res3[0].street;
                                    let Ctown = res3[0].town;

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
                                                template: 'salesOrder',
                                                context: {
                                                    id: id,
                                                    date: date,
                                                    Cname: cname,
                                                    Cno: Cno, Cstreet: Cstreet, Ctown: Ctown,
                                                    contactNumber: contactNumber,
                                                    Wno: Wno, Wstreet: Wstreet, Wtown: Wtown,
                                                    distance: distance,
                                                    total: total,
                                                    items: products,

                                                } // send extra values to template
                                            };

                                            mailer.sendMail(mailOptions, (err, data) => {
                                                if (err) {
                                                    console.log(err);
                                                    return console.log('Error occurs');
                                                }


                                                res.json("sales order added");
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

//SalesOrder-view all,view one
//SalesOrderData-view one(related to a sales order)

exports.getSingleSalesOrderController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from SalesOrder where salesOrderID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a sales order(salesOrderID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}

exports.getAllSalesOrderController = async (req, res) => {
    db.query("select SalesOrder.salesOrderID,SalesOrder.orderDate,SalesOrder.status,SalesOrder.WID,SalesOrder.total,SalesOrder.CID,SalesOrder.CDAID,SalesOrder.CCID,SalesOrder.deliveredDate,SalesOrder.deliveryCharge,SalesOrder.netTotal,Customer.customerName from SalesOrder,Customer where SalesOrder.CID=Customer.CID ", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all sales orders"], (err, response) => { });
            res.json(result);
        }
    });
}


exports.getSingleSalesOrderDataController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from salesOrderData where salesOrderID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a SalesOrderData(salesOrderID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}

exports.getSalesOrdersForCutomerController = async (req, res) => {
    const id = req.params.id;
    db.query("select salesOrderID from SalesOrder where CID=?", [id], (err, response) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "get All sales Orders for Customer(CID-" + id + ")"], (err, response) => { });
            res.json(response);
        }
    })
}

//sales Return order
exports.addSalesReturnOrderController = async (req, res) => {
    const { WID, CID, CDAID, CCID, reason, salesOrderID, items } = req.body;
    const products = [];


    for (let i = 0; i < items.length; i++) {
        try {
            result = await query("select * from Product where PID=?", [items[i].PID]);
            let discount1 = await query("select * from subCategory where SCID=?", [result[0].SubCatID]);
            let discount2 = await query("select * from discounts where PID=? and CID=?", [items[i].PID, CID]);
            let totDiscount = 0;
            if (!_.isEmpty(discount1)) {
                totDiscount += discount1[0].discount;
            }
            if (!_.isEmpty(discount2)) {
                totDiscount += discount2[0].discount;
            }

            products.push({
                PID: items[i].PID,
                unitPrice: result[0].sellingPrice,
                qty: items[i].qty,
                discount: totDiscount,
                netTot: result[0].sellingPrice * items[i].qty * (100 - totDiscount) / 100,
                name: result[0].PName
            });
        } catch (e) {
            res.json({ error: e });
            return;
        }
    }
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].netTot;
    }
    db.query("insert into SalesReturnOrder(initiateDate,total,CID,CDAID,CCID,WID,reason,salesOrderID) values(?,?,?,?,?,?,?,?)", [today, total, CID, CDAID, CCID, WID, reason, salesOrderID], (err, result) => {
        if (err) {
            res.json({ error: err });
            return;
        } else {
            const id = result.insertId;
            for (let i = 0; i < products.length; i++) {
                try {
                    query("insert into salesReturnOrderData(PID,salesReturnOrderID,unitPrice,qty,discount,netTot) values(?,?,?,?,?,?)", [products[i].PID, id, products[i].unitPrice, products[i].qty, products[i].discount, products[i].netTot]);
                } catch (e) {
                    res.json({ error: e });
                    return;
                }
            }
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a sales Return order(salesReturnOrderID-" + id + ")"], (err, response) => { });
            // res.json("sales Return order added");
            mailer.use('compile', hbs({
                viewEngine: {
                    extname: '.handlebars',
                    layoutsDir: '../Backend/views/',
                    defaultLayout: 'salesReturnOrder',
                },
                viewPath: '../Backend/views/'
            }));

            db.query("select * from Customer where CID=?", [CID], (err, res1) => {
                if (err) {
                    res.json({ error: err });
                } else {
                    let toMail = res1[0].email;
                    let cname = res1[0].customerName;
                    let subject = "New Sales Return Order from company ID-" + id;
                    let date = today;
                    db.query("select * from customerContactNumber where CCID=?", [CCID], (err, res2) => {
                        if (err) {
                            res.json({ error: err });
                        } else {
                            let contactNumber = res2[0].contactNumber;
                            db.query("select * from customerDeliveryAddress where CDAID=?", [CDAID], (err, res3) => {
                                if (err) {
                                    res.json({ error: err });
                                } else {
                                    let Cno = res3[0].no;
                                    let Cstreet = res3[0].street;
                                    let Ctown = res3[0].town;

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
                                                template: 'salesReturnOrder',
                                                context: {
                                                    id: id,
                                                    date: date,
                                                    Cname: cname,
                                                    Cno: Cno, Cstreet: Cstreet, Ctown: Ctown,
                                                    contactNumber: contactNumber,
                                                    Wno: Wno, Wstreet: Wstreet, Wtown: Wtown,
                                                    reason: reason,
                                                    salesOrderID: salesOrderID,
                                                    total: total,
                                                    items: products,

                                                } // send extra values to template
                                            };

                                            mailer.sendMail(mailOptions, (err, data) => {
                                                if (err) {
                                                    console.log(err);
                                                    return console.log('Error occurs');
                                                }


                                                res.json("sales return order added");
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


//SalesReturnOrder-view all,view one
//SalesReturnOrderData-view one(related to a sales order)

exports.getSingleSalesReturnOrderController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from SalesReturnOrder where salesReturnOrderID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a sales return order(salesReturnOrderID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}

exports.getAllSalesReturnOrderController = async (req, res) => {
    db.query("select SalesReturnOrder.salesReturnOrderID,SalesReturnOrder.initiateDate,SalesReturnOrder.reason,SalesReturnOrder.status,SalesReturnOrder.WID,SalesReturnOrder.total,SalesReturnOrder.CID,SalesReturnOrder.CDAID,SalesReturnOrder.CCID,SalesReturnOrder.finishDate,SalesReturnOrder.salesOrderID,Customer.customerName from SalesReturnOrder,Customer where SalesReturnOrder.CID=Customer.CID ", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all sales Return orders"], (err, response) => { });
            res.json(result);
        }
    });
}


exports.getSingleSalesReturnOrderDataController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from salesReturnOrderData where salesReturnOrderID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a salesReturnOrderData(salesReturnOrderID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}

exports.getProductStocksForWareHouseController = async (req, res) => {
    const id = req.params.id;
    const { PID, qty } = req.body;


    db.query("select * from stock where WID=? and PID=? and qualityLevel='A'", [id, PID], (err, result) => {

        if (err) {
            res.json({ error: err });
        } else {
            let response;
            if (result.length == 0) {
                response = "we don't have enough stocks";
            } else {
                if (result[0].qty >= qty) {
                    response = "We have Stocks";
                } else {
                    response = "we don't have enough stocks";
                }
            }
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view Product(PID" + PID + ") stocks for warehouse(WID-" + id + ")"], (err, response) => { });
            res.json(response);
        }
    })

}


exports.getSingleSalesOrderDataController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from salesOrderData,Product where salesOrderID=? and Product.PID=salesOrderData.PID", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a SalesOrderData(salesOrderID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}


exports.getSingleSalesReturnOrderDataController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from salesReturnOrderData,Product where salesReturnOrderID=? and Product.PID=salesReturnOrderData.PID", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a SalesReturnOrderData(salesReturnOrderID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}