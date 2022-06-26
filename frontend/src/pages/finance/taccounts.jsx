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
    const [netsalary, setNetSalary] = useState("");
    const [grosssalary, setGrossSalary] = useState("");
    const [advance, setAdvance] = useState("");
    const [epfcompany, setEPFCompany] = useState("");
  
    useEffect(() => {
        axios
          .get("http://localhost:5000/account/TotalSales/get" , {
            withCredentials: true,
            credentials: "include",
          })
          .then((res) => {
             setSales(Math.round(res.data));
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

      useEffect(() => {
        axios
          .get("http://localhost:5000/account/TotalNetSalary/get" , {
            withCredentials: true,
            credentials: "include",
          })
          .then((res) => {
             setNetSalary(res.data);
          });
      }, [""]);

      useEffect(() => {
        axios
          .get("http://localhost:5000/account/TotalGrossSalary/get" , {
            withCredentials: true,
            credentials: "include",
          })
          .then((res) => {
             setGrossSalary(res.data);
          });
      }, [""]);

      useEffect(() => {
        axios
          .get("http://localhost:5000/account/TotalAdvance/get" , {
            withCredentials: true,
            credentials: "include",
          })
          .then((res) => {
             setAdvance(res.data);
          });
      }, [""]);

      useEffect(() => {
        axios
          .get("http://localhost:5000/account/TotalEPFCompany/get" , {
            withCredentials: true,
            credentials: "include",
          })
          .then((res) => {
             setEPFCompany(res.data);
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
                                    <td> Cash {sales} </td>
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
                                    <td class="debit">Cash {purchases} </td>
                                    <td> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">Salary Control</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit">
                                        Advance {advance}
                                        <br></br>
                                        EPF Payable {epf}
                                    </td>
                                    <td>
                                        Salary {grosssalary}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">Salary Account</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit">Salary Control {grosssalary}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">EPF Expense</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit">EPF Payable {epfcompany}</td>
                                    <td> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">ETF Expense</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit">ETF Payable {etf}</td>
                                    <td> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">Cash</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit">Sales {sales}</td>
                                    <td>Purchase {purchases}</td>
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
                                    <td class="debit"></td>
                                    <td>Salary Control {advance}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">EPF Payable</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit"></td>
                                    <td>Salary Control {epf}
                                        <br></br>
                                        EPF Expense {epfcompany}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">ETF Payable</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit"></td>
                                    <td>ETF Expense {etf}</td>
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