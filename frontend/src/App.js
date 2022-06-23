import Login from "./pages/login/Login";
import AddEmployee from "./pages/hr/employeee/add/add"

import AddProduct from "./pages/purchase/add_product/add_product";
import AddCategory from "./pages/purchase/add_category/add_category";
import AddSubCategory from "./pages/purchase/add_sub_category/add_sub_category";
import Viewproduct from "./pages/purchase/view_product/view_product";
import EditCategory from "./pages/purchase/edit_category/edit_category";
import Addsupplier from "./pages/purchase/add_supplier/add_supplier";
import EditSuppler from "./pages/purchase/edit_supplier/edit_supplier";
import EditsubCategory from "./pages/purchase/edit_sub_category/edit_sub_category";

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
import Updateproduct from "./pages/purchase/update_product/update_product";





import ViewAllEmployees from "./pages/hr/employeee/viewAll/viewAll";

import WarehouseDetails from "./pages/inventory/warehouse/warehouseDetails/warehouseDetails";
import StockDetails from "./pages/inventory/warehouse/stockDetails/stockDetails";
import PurchaseOrderDetails from "./pages/inventory/order/purchaseOrderDetails/purchaseOrderDetails";
import SalesOrderDetails from "./pages/inventory/order/salesOrderDetails/salesOrderDetails";
import ReturnOrderDetails from "./pages/inventory/order/SalesReturnOrderDetails/returnOrderDetails";
import PurchaseReturnOrderDetails from "./pages/inventory/order/purchaseReturnOrderDetails/purchaseReturnOrderDetails";
import InventoryDashboard from "./pages/inventory/dashboard/dashboard";
import PurchaseOrderData from "./pages/inventory/order/orderData/purchaseOrderData";
import ReturnOrderData from "./pages/inventory/order/orderData/ReturnOrderData";
import PurchaseReturnOrderData from "./pages/inventory/order/orderData/purchaseReturnOrderData";
import SalesOrderData from "./pages/inventory/order/orderData/salesOrderData";
import ChangeQualityLevel from "./pages/inventory/qualityLevel/qualityLevel";
import EditWarehouseDetails from "./pages/inventory/warehouse/editWarehouseDet/editWarehouseDetails";
import ChangePurchaseOrderStatus from "./pages/inventory/order/purchaseOrderDetails/changePurchaseStatus";
import AddInternalShipmentsPart1 from "./pages/inventory/internalShipment/addShipment1";
import AddInternalShipmentsPart2 from "./pages/inventory/internalShipment/addShipment2";
import ReceiveData from "./pages/inventory/internalShipment/receiveData";
import ReceiveDetails from "./pages/inventory/internalShipment/receiveDetails";
import SendData from "./pages/inventory/internalShipment/sendData";
import SendDetails from "./pages/inventory/internalShipment/sendDetails";

import AddCustomer from "./pages/sales/customer/add/add";
import EditCustomer from "./pages/sales/customer/edit/edit";
import ViewAllCustomer from "./pages/sales/viewAll/viewAll";
import AddCustomerContactNumber from "./pages/sales/customerContactNumber/add/add";
import EditCustomerContactNumber from "./pages/sales/customerContactNumber/edit/edit";
import AddCustomerDeliveryAddress from "./pages/sales/customerDeliveryAddress/add/add";
import ViewCustomerDeliveryAddress from "./pages/sales/customerDeliveryAddress/viewAll/viewAll";
import EditCustomerDeliveryAddress from "./pages/sales/customerDeliveryAddress/edit/edit";
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
import CalculateSalary from "./pages/hr/salary/calculate/calculate";
import ViewAllSalaries from "./pages/hr/salary/viewAll/viewAll";
import ViewAllSalariesForEmployee from "./pages/hr/salary/viewAllForEmployee/viewAll";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";


import AddUser from "./pages/admin/adduser/adduser";
import ViewAllUsers from "./pages/admin/viewAll/viewAll";
import ViewAllWarehouses from "./pages/admin/viewwarehouses/viewwarehouses";
import AddSalesReturnOrderPart1 from "./pages/sales/salesReturnOrder/add/add";
import AddSalesReturnOrderPart2 from "./pages/sales/salesReturnOrder/add/add2";

import ViewAllActivity from "./pages/admin/viewactivity/viewactivity";
import AddWarehouse from "./pages/admin/addwarehouse/addwarehouse";
import EditUserDetails from "./pages/admin/edituser/edituser";
import ViewAccounts from "./pages/finance/accounts";
import SetDiscount from "./pages/admin/setdiscount/setdiscount";

import user from "./auth";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProtectedRouteUser from "./components/ProtectedRoute/ProtectedRouteUser";
import LogOut from "./pages/logout/logout";
import Profile from "./pages/profile/profile";



function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="logout" element={<LogOut />} />
            <Route path="profile" element={<ProtectedRouteUser><Profile /></ProtectedRouteUser>} />

            <Route path="inventory">
              <Route index element={<ProtectedRoute level={4}><InventoryDashboard /></ProtectedRoute>} />
              <Route path="changeQualityLevel" element={<ProtectedRoute level={4}><ChangeQualityLevel /></ProtectedRoute>} />
              <Route path="warehouse">
                <Route path="warehousedetails" element={<ProtectedRoute level={4}><WarehouseDetails /></ProtectedRoute>} />
                <Route path="editDetails/:WID" element={<ProtectedRoute level={4}><EditWarehouseDetails /></ProtectedRoute>} />
                <Route path="stockDetails/:id" element={<ProtectedRoute level={4}><StockDetails /></ProtectedRoute>} />   
              </Route>

              <Route path="order">
                <Route path="purchaseOrders" >
                  <Route index element={<ProtectedRoute level={4}><PurchaseOrderDetails /></ProtectedRoute>} />
                  <Route path="changeStatus/:purchaseOrderID" element={<ProtectedRoute level={4}><ChangePurchaseOrderStatus /></ProtectedRoute>} />
                  <Route path="orderData/:id" element={<ProtectedRoute level={4}><PurchaseOrderData /></ProtectedRoute>} />
                </Route>

                <Route path="returnOrders" >
                  <Route index element={<ProtectedRoute level={4}><ReturnOrderDetails /></ProtectedRoute>} />
                  <Route path="orderData/:id" element={<ProtectedRoute level={4}><ReturnOrderData /></ProtectedRoute>} />
                </Route>

                <Route path="purchaseReturnOrders" >
                  <Route index element={<ProtectedRoute level={4}><PurchaseReturnOrderDetails /></ProtectedRoute>} />
                  <Route path="orderData/:id" element={<ProtectedRoute level={4}><PurchaseReturnOrderData /></ProtectedRoute>} />
                </Route>

                <Route path="salesOrders" >
                  <Route index element={<ProtectedRoute level={4}><SalesOrderDetails /></ProtectedRoute>} />
                  <Route path="orderData/:id" element={<ProtectedRoute level={4}><SalesOrderData /></ProtectedRoute>} />   
                </Route>
              </Route>

              <Route path="internalShipments" >
                <Route path="add2" element={<ProtectedRoute level={4}><AddInternalShipmentsPart1 /></ProtectedRoute>} />
                <Route path="add" element={<ProtectedRoute level={4}><AddInternalShipmentsPart2 /></ProtectedRoute>} />     
                <Route path="toReceive" element={<ProtectedRoute level={4}><ReceiveDetails /></ProtectedRoute>} />
                <Route path="ReceivedShipmentData/:id" element={<ProtectedRoute level={4}><ReceiveData /></ProtectedRoute>} />
                <Route path="toSend" element={<ProtectedRoute level={4}><SendDetails /></ProtectedRoute>} />  
                <Route path="sentShipmentData/:id" element={<ProtectedRoute level={4}><SendData /></ProtectedRoute>} />
              </Route>

            </Route>

            <Route path="purchase">
              <Route index element={<ProtectedRoute level={3}><AddProduct /></ProtectedRoute>} />
              <Route path="product">
                <Route path="add" element={<ProtectedRoute level={3}><AddProduct /></ProtectedRoute>} />
                <Route path="addcat" element={<ProtectedRoute level={3}><AddCategory /></ProtectedRoute>} />
                <Route path="addsubcat" element={<ProtectedRoute level={3}><AddSubCategory /></ProtectedRoute>} />
                <Route path="viewproduct" element={<ProtectedRoute level={3}><Viewproduct /></ProtectedRoute>} />
                <Route path="editcat" element={<ProtectedRoute level={3}><EditCategory /></ProtectedRoute>} />
                <Route path="editsubcat" element={<ProtectedRoute level={3}><EditsubCategory /></ProtectedRoute>} />
                <Route path="editsubcat" element={<ProtectedRoute level={3}><EditsubCategory /></ProtectedRoute>} />
                <Route path="updatecat/:catID" element={<ProtectedRoute level={3}><UpdateCategory /></ProtectedRoute>} />
                <Route path="updatesubcat/:SCID" element={<ProtectedRoute level={3}><UpdatesubCategory /></ProtectedRoute>} />
                <Route path="update/:PID" element={<ProtectedRoute level={3}><Updateproduct /></ProtectedRoute>} />

               </Route>
              <Route path="addsupplier" element={<ProtectedRoute level={3}><Addsupplier /></ProtectedRoute>} />
              <Route path="editsupplier" element={<ProtectedRoute level={3}><EditSuppler /></ProtectedRoute>} />
              <Route path="addlocation" element={<ProtectedRoute level={3}><AddStoreLocation /></ProtectedRoute>} />
              <Route path="updatesupplier/:SID" element={<ProtectedRoute level={3}><Updatesupplier /></ProtectedRoute>} />
              <Route path="viewsuplocation/:SID" element={<ProtectedRoute level={3}><ViewStoreLocations /></ProtectedRoute>} />
              <Route path="addcontactno" element={<ProtectedRoute level={3}><AddContactNo /></ProtectedRoute>} />
              <Route path="viewcontactno/:SID" element={<ProtectedRoute level={3}><ViewContactNo /></ProtectedRoute>} />
              <Route path="viewOrders" element={<ProtectedRoute level={3}><ViewPurchaseOrder /></ProtectedRoute>} />
              <Route path="vieworderdata/:purchaseOrderID" element={<ProtectedRoute level={3}><ViewPurchaseOrderData /></ProtectedRoute>} />
              <Route path="order1" element={<ProtectedRoute level={3}><AddPurchaseOrder1 /></ProtectedRoute>} />
              <Route path="order2" element={<ProtectedRoute level={3}><AddPurchaseOrder2 /></ProtectedRoute>} />


            </Route>

            <Route path="hr">
              <Route index element={<ProtectedRoute level={2}><AddEmployee /></ProtectedRoute>} />
              <Route path="employee">
                <Route path="add" element={<ProtectedRoute level={2}><AddEmployee /></ProtectedRoute>} />
                <Route path="viewall" element={<ProtectedRoute level={2}><ViewAllEmployees /></ProtectedRoute>} />
                <Route path="edit/:EID" element={<ProtectedRoute level={2}><EditEmployee /></ProtectedRoute>} />
              </Route>
              <Route path="dependent">
                <Route path="add" element={<ProtectedRoute level={2}><AddDependent /></ProtectedRoute>} />
                <Route path="viewall/:EID" element={<ProtectedRoute level={2}><ViewAllDependents /></ProtectedRoute>} />
                <Route path="edit/:DID" element={<ProtectedRoute level={2}><EditDependent /></ProtectedRoute>} />
              </Route>
              <Route path="otType">
                <Route path="add" element={<ProtectedRoute level={2}><AddOtType /></ProtectedRoute>} />
                <Route path="viewall/" element={<ProtectedRoute level={2}><ViewAllOtTypes /></ProtectedRoute>} />
                <Route path="edit/:otID" element={<ProtectedRoute level={2}><EditOtType /></ProtectedRoute>} />
              </Route>
              <Route path="otRecord">
                <Route path="add" element={<ProtectedRoute level={2}><AddOtRecord /></ProtectedRoute>} />
                <Route path="viewall/" element={<ProtectedRoute level={2}><ViewAllOtRecords /></ProtectedRoute>} />
                <Route path="viewall/:EID" element={<ProtectedRoute level={2}><ViewAllOtRecordForEmployee /></ProtectedRoute>} />
              </Route>
              <Route path="advance">
                <Route path="add" element={<ProtectedRoute level={2}><AddAdvance /></ProtectedRoute>} />
                <Route path="viewall/" element={<ProtectedRoute level={2}><ViewAllAdvance /></ProtectedRoute>} />
                <Route path="viewall/:EID" element={<ProtectedRoute level={2}><ViewAllAdvanceForEmployee /></ProtectedRoute>} />
              </Route>
              <Route path="salary">
                <Route path="calculate" element={<ProtectedRoute level={2}>< CalculateSalary /></ProtectedRoute>} />
                <Route path="viewall/" element={<ProtectedRoute level={2}><ViewAllSalaries /></ProtectedRoute>} />
                <Route path="viewall/:EID" element={<ProtectedRoute level={2}>< ViewAllSalariesForEmployee /></ProtectedRoute>} />
              </Route>
              <Route path="attendance">
                {/* <Route path="calculate" element={<ProtectedRoute level={2}>< CalculateSalary /></ProtectedRoute>} /> */}
                {/* <Route path="viewall/" element={<ProtectedRoute level={2}><ViewAllSalaries /></ProtectedRoute>} />
                <Route path="viewall/:EID" element={<ProtectedRoute level={2}>< ViewAllSalariesForEmployee /></ProtectedRoute>} /> */}
              </Route>
            </Route>

            <Route path="sales">
              <Route index element={<ProtectedRoute level={1}><AddCustomer /></ProtectedRoute>} />
              <Route path="customer">
                <Route path="add" element={<AddCustomer />} />
                <Route path="viewAll" element={<ViewAllCustomer />} />
                <Route path="edit/:CID" element={<EditCustomer />} />
              </Route>
              <Route path="salesOrder">
                <Route path="add" element={<AddSalesOrderPart1 />} />
                <Route path="add2" element={<AddSalesOrderPart2 />} />
                <Route path="viewAll" element={<ViewAllSalesOrders />} />
                <Route path="viewAll2/:salesOrderID" element={<ViewSalesOrderData />} />
              </Route>
              <Route path="salesReturnOrder">
                <Route path="add" element={<AddSalesReturnOrderPage1 />} />
                <Route path="add2" element={<AddSalesReturnOrderPage2 />} />
                <Route path="viewAll" element={<ViewAllSalesReturnOrders />} />
                <Route path="viewAll2/:salesReturnOrderID" element={<ViewSalesReturnOrderData />} />
              </Route>
              <Route path="salesReturnOrders">
                <Route path="add2" element={<AddSalesReturnOrderPage2 />} />
              </Route>
              <Route path="customerContactNumber">
                <Route path="add" element={<AddCustomerContactNumber />} />
                <Route path="edit/:CCID" element={<EditCustomerContactNumber />} />
                <Route path="viewAll" element={<ViewAllCustomerContactDetails />} />
                <Route path="viewAll/:CID" element={<ViewAllCustomerContactDetails />} />
              </Route>
              <Route path="customerDeliveryAddress">
                <Route path="add" element={<AddCustomerDeliveryAddress />} />
                <Route path="edit/:CDAID" element={<EditCustomerDeliveryAddress />} />
                <Route path="viewAll" element={<ViewCustomerDeliveryAddress />} />
                <Route path="viewAll/:CID" element={<ViewCustomerDeliveryAddress />} />
              </Route>
            </Route>

            <Route path="admin">

              <Route index element={<ProtectedRoute level={0}><AddUser /></ProtectedRoute>} />
              <Route path="adduser" element={<AddUser />} />
              <Route path="viewAll" element={<ViewAllUsers />} />
              <Route path="viewwarehouses" element={<ViewAllWarehouses />} />
              <Route path="viewactivity" element={<ViewAllActivity />} />
              <Route path="addwarehouse" element={<AddWarehouse />} />
              <Route path="edituser/:UID" element={<EditUserDetails />} />
              <Route path="setdiscount" element={<SetDiscount />} />
            </Route>

            <Route path="account" element={<ViewAccounts />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
