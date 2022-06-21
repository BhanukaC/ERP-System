import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/new";
import AddEmployee from "./pages/hr/employeee/add/add"

import AddProduct from "./pages/purchase/add_product/add_product";
import AddCategory from "./pages/purchase/add_category/add_category";
import AddSubCategory from "./pages/purchase/add_sub_category/add_sub_category";
import Viewproduct from "./pages/purchase/view_product/view_product";
import EditCategory from "./pages/purchase/edit_category/edit_category";
import Addsupplier from "./pages/purchase/add_supplier/add_supplier";
import EditSuppler from "./pages/purchase/edit_supplier/edit_supplier";
import EditsubCategory from "./pages/purchase/edit_sub_category/edit_sub_category";
import Purchasehome from "./pages/purchase/home_purchase/home_purchase";
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
import ChangeQualityLevel from "./pages/inventory/qualityLevel/qualityLevel";
import EditWarehouseDetails from "./pages/inventory/warehouse/editWarehouseDet/editWarehouseDetails";


import AddCustomer from "./pages/sales/customer/add/add";
import EditCustomer from "./pages/sales/customer/edit/edit";
import ViewAllCustomer from "./pages/sales/viewAll/viewAll";
import AddCustomerContactNumber from "./pages/sales/customerContactNumber/add/add";
import AddCustomerDeliveryAddress from "./pages/sales/customerDeliveryAddress/add/add";
import ViewCustomerDeliveryAddress from "./pages/sales/customerDeliveryAddress/viewAll/viewAll";
import ViewAllCustomerContactDetails from "./pages/sales/customerContactNumber/viewAll/viewAll";
import AddSalesReturnOrderPage1 from "./pages/sales/salesReturnOrder/add/add";
import AddSalesReturnOrderPage2 from "./pages/sales/salesReturnOrder/add/add2";
import ViewAllSalesReturnOrders from "./pages/sales/salesReturnOrder/add/viewAll/viewAll"; 
import ViewSalesReturnOrderData from "./pages/sales/salesReturnOrder/add/viewAll/viewAll2"; 
import AddSalesOrderPart1 from "./pages/sales/salesOrder/add/add";
import AddSalesOrderPart2 from "./pages/sales/salesOrder/add/add2";
import ViewAllSalesOrders from "./pages/sales/salesOrder/viewAll/viewAll";
import ViewSalesOrderData from "./pages/sales/salesOrder/viewAll/viewAll2";

import EditEmployee from "./pages/hr/employeee/edit/edit";
import AddDependent from "./pages/hr/dependent/add/add";
import ViewAllDependents from "./pages/hr/dependent/viewAll/viewAll";
import EditDependent from "./pages/hr/dependent/edit/edit";
import AddOtType from "./pages/hr/otTypes/add/add";
import ViewAllOtTypes from "./pages/hr/otTypes/viewAll/viewAll";
import EditOtType from "./pages/hr/otTypes/edit/edit";
import AddOtRecord from "./pages/hr/otRecord/add/add";
import ViewAllOtRecords from "./pages/hr/otRecord/viewAll/viewAll";
import ViewAllOtRecordForEmployee from "./pages/hr/otRecord/viewAllForEmployee/viewAll";
import AddAdvance from "./pages/hr/advance/add/add";
import ViewAllAdvance from "./pages/hr/advance/viewAll/viewAll";
import ViewAllAdvanceForEmployee from "./pages/hr/advance/viewAllForEmployee/viewAll";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";


import AddUser from "./pages/admin/adduser/adduser";
import ViewAllUsers from "./pages/admin/viewAll/viewAll";
import ViewAllWarehouses from "./pages/admin/viewwarehouses/viewwarehouses";
import AddSalesReturnOrderPart1 from "./pages/sales/salesReturnOrder/add/add";
import AddSalesReturnOrderPart2 from "./pages/sales/salesReturnOrder/add/add2";


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
              <Route index element={<InventoryDashboard />} />
              <Route path="changeQualityLevel" element={<ChangeQualityLevel />} />
              <Route path="warehouse">
                <Route path="warehousedetails" element={<WarehouseDetails />} />
                <Route path="editDetails/:WID" element={<EditWarehouseDetails />} />
                <Route path="stockDetails/:id" element={<StockDetails />} />
              </Route>

              <Route path="order">
                <Route path="purchaseOrders" element={<PurchaseOrderDetails />} />
                <Route path="returnOrders" element={<ReturnOrderDetails />} />
                <Route path="salesOrders" element={<SalesOrderDetails />} />
                <Route path="purchaseOrderData/:id" element={<PurchaseOrderData />} />
                <Route path="salesOrderData/:id" element={<SalesOrderData />} />
                <Route path="returnOrderData/:id" element={<ReturnOrderData />} />
              </Route>

            </Route>

            <Route path="purchase">
              <Route index element={<Purchasehome />} />
              <Route path="product">
                <Route path="add" element={<AddProduct />} />
                <Route path="addcat" element={<AddCategory />} />
                <Route path="addsubcat" element={<AddSubCategory />} />
                <Route path="viewproduct" element={<Viewproduct />} />
                <Route path="editcat" element={<EditCategory />} />
                <Route path="editsubcat" element={<EditsubCategory />} />
              </Route>
              <Route path="addsupplier" element={<Addsupplier />} />
              <Route path="editsupplier" element={<EditSuppler />} />
            </Route>

            <Route path="hr">
              <Route index element={<AddEmployee />} />
              <Route path="employee">
                <Route path="add" element={<AddEmployee />} />
                <Route path="viewall" element={<ViewAllEmployees />} />
                <Route path="edit/:EID" element={<EditEmployee />} />
              </Route>
              <Route path="dependent">
                <Route path="add" element={<AddDependent />} />
                <Route path="viewall/:EID" element={<ViewAllDependents />} />
                <Route path="edit/:DID" element={<EditDependent />} />
              </Route>
              <Route path="otType">
                <Route path="add" element={<AddOtType />} />
                <Route path="viewall/" element={<ViewAllOtTypes />} />
                <Route path="edit/:otID" element={<EditOtType />} />
              </Route>
              <Route path="otRecord">
                <Route path="add" element={<AddOtRecord />} />
                <Route path="viewall/" element={<ViewAllOtRecords />} />
                <Route path="viewall/:EID" element={<ViewAllOtRecordForEmployee />} />
              </Route>
              <Route path="advance">
                <Route path="add" element={<AddAdvance />} />
                <Route path="viewall/" element={<ViewAllAdvance />} />
                <Route path="viewall/:EID" element={<ViewAllAdvanceForEmployee />} />
              </Route>
            </Route>

            <Route path="sales">
              <Route index element={<AddCustomer />} />
              <Route path="customer">
                <Route path="add" element={<AddCustomer />} />
                <Route path="viewAll" element={<ViewAllCustomer />} />
                <Route path="edit/:CID" element={<EditCustomer />} />
              </Route>
              <Route path="salesOrder">
               <Route path="add" element={<AddSalesOrderPart1 />} />
               <Route path="add2" element={<AddSalesOrderPart2 />} />
                <Route path="viewAll" element={<ViewAllSalesOrders />} />
                <Route path="viewAll2/:id" element={<ViewSalesOrderData />} />
              </Route>
              <Route path="salesReturnOrder">
                <Route path="add" element={<AddSalesReturnOrderPage1 />} />
                <Route path="add2" element={<AddSalesReturnOrderPage2 />} />
                <Route path="viewAll" element={<ViewAllSalesReturnOrders />} />
                <Route path="viewAll2/:id" element={<ViewSalesReturnOrderData />} />
              </Route>
              <Route path="salesReturnOrders"> 
               <Route path="add2" element={<AddSalesReturnOrderPage2 />} />  
              </Route>
              <Route path="customerContactNumber">
                <Route path="add" element={<AddCustomerContactNumber />} />
                <Route path="viewAll" element={<ViewAllCustomerContactDetails />} />
                <Route path="viewAll/:CID" element={<ViewAllCustomerContactDetails />} />
              </Route>
              <Route path="customerDeliveryAddress">
                <Route path="add" element={<AddCustomerDeliveryAddress />} />
                <Route path="viewAll" element={<ViewCustomerDeliveryAddress />} />
                <Route path="viewAll/:CID" element={<ViewCustomerDeliveryAddress />} />
              </Route>
            </Route>

            <Route path="admin">
              <Route index element={<AddUser />} />
              <Route path="adduser" element={<AddUser />} />
              <Route path="viewAll" element={<ViewAllUsers />} />
              <Route path="viewwarehouses" element={<ViewAllWarehouses />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
