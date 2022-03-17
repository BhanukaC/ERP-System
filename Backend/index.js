const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');


const app = express();
const result = dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}));
const purchaseRouter = require("./routes/purchase");

app.use("/purchase", purchaseRouter);

const loginRouter = require('./routes/login');
const hrRouter = require("./routes/hr");

const salesRouter = require("./routes/sale");

const inventoryRouter = require("./routes/inventory");



app.use("/auth", loginRouter);
app.use("/hr", hrRouter);

app.use("/sales", salesRouter);

app.use("/inventory", inventoryRouter);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});