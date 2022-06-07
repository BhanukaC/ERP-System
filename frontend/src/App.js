import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/new";
import AddEmployee from "./pages/hr/employeee/add/add"
import ViewAllEmployees from "./pages/hr/employeee/viewAll/viewAll";
import WarehouseDetails from "./pages/inventory/warehouse/warehouseDetails/warehouseDetails";
import StockDetails from "./pages/inventory/warehouse/stockDetails/stockDetails";
import PurchaseOrderDetails from "./pages/inventory/order/purchaseOrderDetails/purchaseOrderDetails";
import SalesOrderDetails from "./pages/inventory/order/salesOrderDetails/salesOrderDetails";
import ReturnOrderDetails from "./pages/inventory/order/returnOrderDetails/returnOrderDetails";
import InventoryDashboard from "./pages/inventory/dashboard/dashboard";
import PurchaseOrderData from "./pages/inventory/order/orderData/purchaseOrderData";
import ReturnOrderData from "./pages/inventory/order/orderData/ReturnOrderData";
import SalesOrderData from "./pages/inventory/order/orderData/salesOrderData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="inventory">
              <Route path="warehouse">
                <Route path="warehouseDetails" element={<WarehouseDetails />} />
                <Route path="stockDetails/:id" element={<StockDetails />} />
              </Route>

              <Route path="order">
                <Route path="purchaseOrderDetails" element={<PurchaseOrderDetails />} />
                <Route path="returnOrderDetails" element={<ReturnOrderDetails />} />
                <Route path="salesOrderDetails" element={<SalesOrderDetails />} />
                <Route path="purchaseOrderData/:id" element={<PurchaseOrderData />} />
                <Route path="salesOrderData/:id" element={<SalesOrderData />} />
                <Route path="returnOrderData/:id" element={<ReturnOrderData />} />
              </Route>

              <Route path="inventoryDashboard" element={<InventoryDashboard />} />


            </Route>

            <Route path="hr">
              <Route path="employee">
                <Route path="add" element={<AddEmployee />} />
                <Route path="viewall" element={<ViewAllEmployees />} />
              </Route>
            </Route>

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
