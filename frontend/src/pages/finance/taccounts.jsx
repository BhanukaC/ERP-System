import "./taccounts.scss";
import Navbar from "../../components/navbar/Navbar";
import Finance_Sidebar from "../../components/finance_sidebar/finance_sidebar";

const ViewAllUsers = () => {
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
                                    <td class="debit">
                                        <p>hello</p>
                                        <p>hello</p>
                                    </td>
                                    <td>with two columns</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">Purchase</th>
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
                                    <th colspan="2">ETF</th>
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

export default ViewAllUsers;