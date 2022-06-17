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
import UpdateCategory from "./pages/purchase/update_category/update_category";
import UpdatesubCategory from "./pages/purchase/update_sub_category/update_sub_category";
import Updatesupplier from "./pages/purchase/update_supplier/update_supplier";
import ViewStoreLocations from "./pages/purchase/view_store_location/view_store_location";
import AddStoreLocation from "./pages/purchase/add_location/add_location";
import AddContactNo from "./pages/purchase/add_contactno/add_contactno";
import ViewContactNo from "./pages/purchase/viewContactno/viewContactno";
import ViewPurchaseOrder from "./pages/purchase/view_purchase_order/view_purchase_order";
import ViewPurchaseOrderData from "./pages/purchase/view_order_data/view_order_data";
import AddPurchaseOrder1 from "./pages/purchase/purchaseOrder/addPurchaseOrder1";
import AddPurchaseOrder2 from "./pages/purchase/purchaseOrder/addPurchaseOrder2";





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


import AddCustomer from "./pages/sales/customer/add/add"
import ViewAllCustomer from "./pages/sales/viewAll/viewAll"
import AddSalesReturnOrder from "./pages/sales/salesReturnOrder/add/add"
import ViewAllSalesReturnOrders from "./pages/sales/salesReturnOrder/add/viewAll/viewAll";

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
                <Route path="editsubcat" element={<EditsubCategory />} />
                <Route path="updatecat/:catID" element={<UpdateCategory />} />
                <Route path="updatesubcat/:SCID" element={<UpdatesubCategory />} />


              </Route>
              <Route path="addsupplier" element={<Addsupplier />} />
              <Route path="editsupplier" element={<EditSuppler />} />
              <Route path="addlocation" element={<AddStoreLocation />} />
              <Route path="updatesupplier/:SID" element={<Updatesupplier />} />
              <Route path="viewsuplocation/:SID" element={< ViewStoreLocations/>} />
              <Route path="addcontactno" element={<  AddContactNo/>} />
              <Route path="viewcontactno/:SID" element={<   ViewContactNo/>} />
              <Route path="viewOrders" element={<   ViewPurchaseOrder/>} />
              <Route path="vieworderdata/:purchaseOrderID" element={<  ViewPurchaseOrderData/>} />
              <Route path="order1" element={<AddPurchaseOrder1 />} />
              <Route path="order2" element={<AddPurchaseOrder2 />} />
              

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
              </Route>
              <Route path="salesReturnOrder">
                <Route path="add" element={<AddSalesReturnOrder />} />
                <Route path="viewAll" element={<ViewAllSalesReturnOrders />} />
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
