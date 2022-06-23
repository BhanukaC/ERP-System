const db = require("../helpers/db");
const query = require("../helpers/mysqlPromise");
const today = require("../helpers/today");
const _ = require("underscore");
const mailer = require('../helpers/mailer');
const hbs = require('nodemailer-handlebars');

//update warehouse details
exports.warehouseUpdateController = async (req, res) => {
    const id = req.params.id;
    const { ManagerName, no, street, town } = req.body;
    db.query("update Warehouse set ManagerName=?, no=?,street=?,town=? where WID=?", [ManagerName, no, street, town, id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Update a Warehouse(WID-" + id + ")"], (err, response) => { });
            res.json("update Warehouse Details");

        }
    });
};

//get a single warehouse details
exports.getSingleWarehouseController = async (req, res) => {
    const id = req.params.id;
    db.query("select WID,ManagerName,no,street,town from Warehouse where WID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "View a Warehouse(WID-" + id + ")"], (err, response) => { });
            res.json(result);

        }
    });
};

//get all warehouse details
exports.getAllWarehouseController = async (req, res) => {
    db.query("select WID,ManagerName,no,street,town from Warehouse", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "View all Warehouses"], (err, response) => { });
            res.json(result);

        }
    });
};

//get a single purchase order
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

//view all purchase orders
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

//get purchase order data
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

//update status and of a purchase order
exports.purchaseOrderUpdateController = async (req, res) => {
    const { purchaseOrderID, WID, status, reason } = req.body;
    let response;
    try {
        response = await query("select * from purchaseOrderData where purchaseOrderID=?", [purchaseOrderID]);
    } catch (e) {
        res.json({ error: e });
        return;
    }
    if(response.length!==0){
        db.query("update purchaseOrder set status=? ,deliveredDate=? where purchaseOrderID=?", [status, today, purchaseOrderID], (err, result) => {
            if (err) {
                res.json({ error: err });
                return;
            } else {
                if (status == "D") {
                    for (let i = 0; i < response.length; i++) {
                        db.query("insert into stockRecord(PID,qty,UID,WID,status,purchaseOrderID) values(?,?,?,?,?,?)", [response[i].PID, response[i].qty, req.user.id, WID, "R", purchaseOrderID], (err, result) => {
                            if (err) {
                                res.json({ error: err });
                                return;
                            }
                            db.query("select * from stock where PID=? and WID=?", [response[i].PID, WID], (err, result) => {
                                if (_.isEmpty(result)) {
                                    db.query("insert into stock(PID,qty,WID) values(?,?,?)", [response[i].PID, response[i].qty, WID], (err, result) => {
                                        if (err) {
                                            res.json({ error: err });
                                            return;
                                        }
                                    });
                                } else {
                                    db.query("update stock set qty=? where ID=?", [result[0].qty + response[i].qty, result[0].ID], (err, result) => {
                                        if (err) {
                                            res.json({ error: err });
                                            return;
                                        }
                                    })
                                }
                            })
                        });
                    }
                    db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Update Purchase Order as Received(purchaseOrderID-" + purchaseOrderID + ")"], (err, response) => { });
                    res.json("Purchase order Received");
                    return;
                } else {
                    db.query("select * from purchaseOrder where purchaseOrderID=?", [purchaseOrderID], (err, result) => {
                        if (err) {
                            res.json({ error: err });
                            return;
                        } else {
                            db.query("insert into purchaseReturnOrder(initiateDate,SID,SSLID,SCID,reason,total,WID,purchaseOrderID) values(?,?,?,?,?,?,?,?)", [today, result[0].SID, result[0].SSLID, result[0].SCID, reason, result[0].total, WID, purchaseOrderID], (err, result) => {
                                if (err) {
                                    res.json({ error: err });
                                    return;
                                } else {
                                    const purchaseReturnOrderID = result.insertId;
                                    for (let i = 0; i < response.length; i++) {
                                        db.query("insert into purchaseReturnOrderData(purchaseReturnOrderID,PID,unitPrice,qty,discount,netTot) values(?,?,?,?,?,?)", [purchaseReturnOrderID, response[i].PID, response[i].unitPrice, response[i].qty, response[i].discount, response[i].netTot], (err, result) => {
                                            if (err) {
                                                res.json({ error: err });
                                                return;
                                            }
                                        });
                                    }
                                    db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Update Purchase Order as Cancel(purchaseOrderID-" + purchaseOrderID + ")"], (err, response) => { });
                                    db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a purchase return order(purchaseReturnOrderID-" + purchaseReturnOrderID + ")"], (err, response) => { });

                                    mailer.use('compile', hbs({
                                        viewEngine: {
                                            extname: '.handlebars',
                                            layoutsDir: '../Backend/views/',
                                            defaultLayout: 'purchaseReturnOrder',
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
                                                                        template: 'purchaseReturnOrder',
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
                        
                        
                                                                        res.json("Purchase order Returned");
                                                                        return;
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
                            })
                        }
                    });
                }
    
            }
        });
    }else{
        db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Tried to update purchase order but failed"], (err, response) => { });
        res.json("Please Provide purchaseOrderID");
        return;
    }
    
}



//get a single sales order
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

//view all sales orders
exports.getAllSalesOrderController = async (req, res) => {
    db.query("select * from SalesOrder ", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all sales orders"], (err, response) => { });
            res.json(result);
        }
    });
}

//get sales order data
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

//update status a sales order
exports.salesOrderUpdateController = async (req, res) => {
    const { salesOrderID, WID } = req.body;
    let response;
    try {
        response = await query("select * from salesOrderData where salesOrderID=?", [salesOrderID]);
    } catch (e) {
        res.json({ error: e });
        return;
    }

    for (let i = 0; i < response.length; i++) {
        const result1 = await query("select * from stock where PID=? and WID=?", [response[i].PID, WID]);
        if (_.isEmpty(result1)) {
            res.json({ error: "No stock found" });
            return;
        }
    }

    db.query("update SalesOrder set status=? ,deliveredDate=? where salesOrderID=?", ["D", today, salesOrderID], (err, result) => {
        if (err) {
            res.json({ error: err });
            return;
        } else {
            for (let i = 0; i < response.length; i++) {
                db.query("insert into stockRecord(PID,qty,UID,WID,status,salesOrderID) values(?,?,?,?,?,?)", [response[i].PID, response[i].qty, req.user.id, WID, "I", salesOrderID], (err, result) => {
                    if (err) {
                        res.json({ error: err });
                        return;
                    }
                    db.query("select * from stock where PID=? and WID=?", [response[i].PID, WID], (err, result) => {

                        db.query("update stock set qty=? where ID=?", [result[0].qty - response[i].qty, result[0].ID], (err, result) => {
                            if (err) {
                                res.json({ error: err });
                                return;
                            }
                        });

                    });
                });
            }
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Update Sales Order as Issued(salesOrderID-" + salesOrderID + ")"], (err, response) => { });
            res.json("Sales order Issued");

        }
    });

}

//get a sales return order
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

//view all sales return orders
exports.getAllSalesReturnOrderController = async (req, res) => {

    db.query("select * from SalesReturnOrder where status!='P'", (err, result) => {

        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all sales Return orders"], (err, response) => { });
            res.json(result);
        }
    });
}

//get sales return order data
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


//update status a sales Return order
exports.salesReturnOrderUpdateController = async (req, res) => {
    const { salesReturnOrderID, WID } = req.body;
    let response;
    try {
        response = await query("select * from salesReturnOrderData where salesReturnOrderID=?", [salesReturnOrderID]);
    } catch (e) {
        res.json({ error: e });
        return;
    }
    db.query("update SalesReturnOrder set status=? ,finishDate=? where salesReturnOrderID=?", ["D", today, salesReturnOrderID], (err, result) => {
        if (err) {
            res.json({ error: err });
            return;
        } else {

            for (let i = 0; i < response.length; i++) {
                db.query("insert into stockRecord(PID,qty,UID,WID,status,salesReturnOrderID) values(?,?,?,?,?,?)", [response[i].PID, response[i].qty, req.user.id, WID, "R", salesReturnOrderID], (err, result) => {
                    if (err) {
                        res.json({ error: err });
                        return;
                    }
                    db.query("select * from stock where PID=? and WID=?", [response[i].PID, WID], (err, result) => {
                        if (_.isEmpty(result)) {
                            db.query("insert into stock(PID,qty,WID) values(?,?,?)", [response[i].PID, response[i].qty, WID], (err, result) => {
                                if (err) {
                                    res.json({ error: err });
                                    return;
                                }
                            });
                        } else {
                            db.query("update stock set qty=? where ID=?", [result[0].qty + response[i].qty, result[0].ID], (err, result) => {
                                if (err) {
                                    res.json({ error: err });
                                    return;
                                }
                            })
                        }
                    })
                });
            }
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Update Sales Return Order as Received(salesReturnOrderID-" + salesReturnOrderID + ")"], (err, response) => { });
            res.json("Sales Return order Received");
            return;


        }
    });
}

//get a purchase return order
exports.getSinglePurchaseReturnOrderController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from purchaseReturnOrder where purchaseReturnOrderID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a purchase return order(purchaseReturnOrderID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}

//view all purchase return orders
exports.getAllPurchaseReturnOrderController = async (req, res) => {
    db.query("select * from purchaseReturnOrder ", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all purchase return orders"], (err, response) => { });
            res.json(result);
        }
    });
}

//get purchase return order data
exports.getSinglePurchaseReturnOrderDataController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from purchaseReturnOrderData where purchaseReturnOrderID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a purchaseReturnOrderData(purchaseReturnOrderID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}

//add Internal shipment-send
exports.addInternalShipmentController = async (req, res) => {
    const { FromWID, TOWID, items } = req.body;
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

    db.query("insert into internalShipment(date,FromWID,TOWID) values(?,?,?)", [today, FromWID, TOWID], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {

            const id = result.insertId;
            for (let i = 0; i < products.length; i++) {
                try {
                    query("insert into internalShipmentData(PID,internalShipmentID,qty) values(?,?,?)", [products[i].PID, id, products[i].qty]);

                    db.query("select * from stock where PID=? and WID=?", [products[i].PID, FromWID], (err, result) => {

                        db.query("insert into stockRecord(PID,qty,UID,WID,status,internalShipmentID) values(?,?,?,?,?,?)", [products[i].PID, products[i].qty, req.user.id, FromWID, "I", id], (err, result) => {
                            if (err) {
                                res.json({ error: err });
                                return;
                            }
                        });

                        db.query("update stock set qty=? where ID=?", [result[0].qty - products[i].qty, result[0].ID], (err, result) => {
                            if (err) {
                                res.json({ error: err });
                                return;
                            }
                        });
                    });

                } catch (e) {
                    res.json({ error: e });
                }
            }
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Add a internal Shipment(internalShipmentID-" + id + ")"], (err, response) => { });
            res.json("Internal Shipment added");

        }

    });
}

//update status of a Internal shipment-recieve
exports.internalShipmentUpdateController = async (req, res) => {
    const { internalShipmentID, WID } = req.body;
    let response;
    try {
        response = await query("select * from internalShipmentData where internalShipmentID=?", [internalShipmentID]);
    } catch (e) {
        res.json({ error: e });
        return;
    }
    db.query("update internalShipment set status=? ,finishDate=? where internalShipmentID=?", ["D", today, internalShipmentID], (err, result) => {
        if (err) {
            res.json({ error: err });
            return;
        } else {

            for (let i = 0; i < response.length; i++) {
                db.query("insert into stockRecord(PID,qty,UID,WID,status,internalShipmentID) values(?,?,?,?,?,?)", [response[i].PID, response[i].qty, req.user.id, WID, "R", internalShipmentID], (err, result) => {
                    if (err) {
                        res.json({ error: err });
                        return;
                    }
                    db.query("select * from stock where PID=? and WID=?", [response[i].PID, WID], (err, result) => {
                        if (_.isEmpty(result)) {
                            db.query("insert into stock(PID,qty,WID) values(?,?,?)", [response[i].PID, response[i].qty, WID], (err, result) => {
                                if (err) {
                                    res.json({ error: err });
                                    return;
                                }
                            });
                        } else {
                            db.query("update stock set qty=? where ID=?", [result[0].qty + response[i].qty, result[0].ID], (err, result) => {
                                if (err) {
                                    res.json({ error: err });
                                    return;
                                }
                            })
                        }
                    })
                });
            }
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Update Internal Shipment as Received(internalShipmentID-" + internalShipmentID + ")"], (err, response) => { });
            res.json("Internal Shipment Received");
            return;
        }
    });
}



//get single internal shipment
exports.getSingleInternalShipmentController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from internalShipment where internalShipmentID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a internal Shipment(internalShipmentID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}

//view Internal Shipment
exports.getAllInternalShipmentToReceiveController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from internalShipment where TOWID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all internal Shipment to receive(WID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}

exports.getAllInternalShipmentToSendController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from internalShipment where FromWID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all internal Shipment delivering(WID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}

//get single internal shipment data
exports.getSingleInternalShipmentDataController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from internalShipmentData where internalShipmentID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view a internalShipmentData(internalShipmentID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}

//get stock level
exports.getAllStockLevelController = async (req, res) => {
    db.query("select * from stock", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all stocks"], (err, response) => { });
            res.json(result);
        }
    });
}

//get stock level of a warehouse
exports.getAllStockLevelForWareHouseController = async (req, res) => {
    const id = req.params.id;
    db.query("select * from stock where WID=?", [id], (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all stocks for warehouse(WID-" + id + ")"], (err, response) => { });
            res.json(result);
        }
    });
}

exports.getProductStocksForWareHouseController=async(req,res)=>{
    const id = req.params.id;
    const{PID,qty}=req.body;
  

    db.query("select * from stock where WID=? and PID=? and qualityLevel='A'",[id,PID],(err,result)=>{
        
        if (err) {
            res.json({ error: err });
        } else {
            let response;
           if(result.length==0){
            response="we don't have enough stocks";
           }else{
            if(result[0].qty>=qty){
                response="We have Stocks";
            }else{
                response="we don't have enough stocks";
            }
           }
            db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view Product(PID"+PID+") stocks for warehouse(WID-" + id + ")"], (err, response) => { });
            res.json(response);
        }
    })

}

//change quality level
exports.changeQualityLevelController = async (req, res) => {
    const { PID, WID, qualityLevel, qty } = req.body;
    db.query("select * from stock where PID=? and WID=? ", [PID, WID], (err, result) => {
        if (err) {
            res.json({ error: err });
            return;
        } else {
            db.query("update stock set qty=? where ID=?", [result[0].qty - qty, result[0].ID], (err, result1) => {

                if (err) {
                    res.json({ error: err });
                    return;
                } else {
                    db.query("select * from stock where PID=? and WID=? and qualityLevel=?", [result[0].PID, result[0].WID, qualityLevel], (err, result1) => {
                        if (err) {
                            res.json({ error: err });
                            return;
                        } else {
                            if (_.isEmpty(result1)) {

                                db.query("insert into stock(PID,qty,qualityLevel,WID) values(?,?,?,?)", [result[0].PID, qty, qualityLevel, result[0].WID], (err, result) => {
                                    db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Cahnged Quality level of stocks(ID-" + result.insertId + ")"], (err, response) => { });
                                    res.json("Changed Quality level of stocks");
                                });
                            } else {
                                db.query("update stock set qty=? where ID=?", [result1[0].qty + qty, result1[0].ID], (err, result) => {
                                    db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "Cahnged Quality level of stocks(ID-" + result1[0].ID + ")"], (err, response) => { });
                                    res.json("Changed Quality level of stocks");
                                });
                            }
                        }
                    })

                }

            });
        }

    });
}

