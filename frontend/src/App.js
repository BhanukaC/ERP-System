import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/new";
import AddEmployee from "./pages/hr/employeee/add/add"
import ViewAllEmployees from "./pages/hr/employeee/viewAll/viewAll";
import AddCustomer from "./pages/sales/customer/add/add"
import ViewAllCustomer from "./pages/sales/viewAll/viewAll"
import AddSalesReturnOrder from "./pages/sales/salesReturnOrder/add/add"
import ViewAllSalesReturnOrders from "./pages/sales/salesReturnOrder/add/viewAll/viewAll";
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

            <Route path="hr">
              <Route path="employee">
                <Route path="add" element={<AddEmployee />} />
                <Route path="viewall" element={<ViewAllEmployees />} />
              </Route>
            </Route>

            <Route path="sales">
              <Route path="customer">
                <Route path="add" element={<AddCustomer />} />
                <Route path="viewAll" element={<ViewAllCustomer />} />
              </Route>
              <Route path="salesReturnOrder">
              <Route path="add" element={<AddSalesReturnOrder />} />
              <Route path="viewAll" element={<ViewAllSalesReturnOrders />} />
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
