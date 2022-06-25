import "./taccounts.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Finance_Sidebar from "../../components/finance_sidebar/finance_sidebar";

const ViewAccountingDetails = () => {
    
    const [sales, setSales] = useState("");
    const [purchases, setPurchases] = useState("");
    const [epf, setEpf] = useState("");
    const [etf, setEtf] = useState("");
  
    useEffect(() => {
        axios
          .get("http://localhost:5000/account/TotalSales/get" , {
            withCredentials: true,
            credentials: "include",
          })
          .then((res) => {
             setSales(res.data);
          });
      }, [""]);

      useEffect(() => {
        axios
          .get("http://localhost:5000/account/TotalPurchases/get" , {
            withCredentials: true,
            credentials: "include",
          })
          .then((res) => {
             setPurchases(res.data);
          });
      }, [""]);

      useEffect(() => {
        axios
          .get("http://localhost:5000/account/TotalEPF/get" , {
            withCredentials: true,
            credentials: "include",
          })
          .then((res) => {
             setEpf(res.data);
          });
      }, [""]);

      useEffect(() => {
        axios
          .get("http://localhost:5000/account/TotalETF/get" , {
            withCredentials: true,
            credentials: "include",
          })
          .then((res) => {
             setEtf(res.data);
          });
      }, [""]);

      

  return (
    <div>
        <div className="list">
            <Finance_Sidebar />
            <div className="listContainer">
                <Navbar />
                <div class="container">
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit"> </td>
                                    <td> {sales} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">Purchases</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit"> {purchases} </td>
                                    <td> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">Net Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit">The table body</td>
                                    <td>with two columns</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">Gross Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit">The table body</td>
                                    <td>with two columns</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">EPF</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit"> </td>
                                    <td> {epf} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">ETF</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit"> </td>
                                    <td> {etf} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">Advance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit">The table body</td>
                                    <td>with two columns</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ViewAccountingDetails;