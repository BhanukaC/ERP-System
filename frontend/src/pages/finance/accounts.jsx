import "./accounts.scss";
import Navbar from "../../components/navbar/Navbar";
import Finance_Sidebar from "../../components/finance_sidebar/finance_sidebar";

const ViewAccounts = () => {
  return (
    <div className="new">
      <Finance_Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>View Accounts</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <div class="grid-container">
              <div class="grid-item">
                <div>
                  <h1 style={{ color: "black" }}>Sales</h1>
                  <hr />
                  <div
                    style={{
                      width: "50%",
                      display: "inline",
                      marginRight: "3px",
                    }}
                  ></div>
                  <div class="vl" style={{ display: "inline" }}></div>
                  <div
                    style={{
                      width: "50%",
                      display: "inline",
                      marginLeft: "3px",
                    }}
                  >
                    Cash &nbsp; 10000
                  </div>
                </div>
              </div>
              <div class="grid-item"></div>
              <div class="grid-item">
                {" "}
                <div>
                  <h1 style={{ color: "black" }}>Purchase</h1>
                  <hr />
                  <div
                    style={{
                      width: "50%",
                      display: "inline",
                      marginRight: "3px",
                    }}
                  >
                    Cash &nbsp; 10000
                  </div>
                  <div class="vl" style={{ display: "inline" }}></div>
                  <div
                    style={{
                      width: "50%",
                      display: "inline",
                      marginLeft: "3px",
                    }}
                  ></div>
                </div>
              </div>
              <div class="grid-item">
                {" "}
                <div>
                  <h1 style={{ color: "black" }}>Cash</h1>
                  <hr />
                  <div
                    style={{
                      width: "50%",
                      display: "inline",
                      marginRight: "3px",
                    }}
                  >
                    Sales &nbsp; 10000
                  </div>
                  <div class="vl" style={{ display: "inline" }}></div>
                  <div
                    style={{
                      width: "50%",
                      display: "inline",
                      marginLeft: "3px",
                    }}
                  >
                    Purchase &nbsp; 10000
                  </div>
                </div>
              </div>
              <div class="grid-item"></div>
              <div class="grid-item">
                {" "}
                <div>
                  <h1 style={{ color: "black" }}>Salary Control</h1>
                  <hr />
                  <div
                    style={{
                      width: "50%",
                      display: "inline",
                      marginRight: "3px",
                    }}
                  ></div>
                  <div class="vl" style={{ display: "inline" }}></div>
                  <div
                    style={{
                      width: "50%",
                      display: "inline",
                      marginLeft: "3px",
                    }}
                  >
                    Salary &nbsp; 100000
                  </div>
                </div>
              </div>
              <div class="grid-item">
                {" "}
                <div>
                  <h1 style={{ color: "black" }}>Salary Account</h1>
                  <hr />
                  <div
                    style={{
                      width: "50%",
                      display: "inline",
                      marginRight: "3px",
                    }}
                  >
                    Salary &nbsp; 100000
                  </div>
                  <div class="vl" style={{ display: "inline" }}></div>
                  <div
                    style={{
                      width: "50%",
                      display: "inline",
                      marginLeft: "3px",
                    }}
                  ></div>
                </div>
              </div>
              <div class="grid-item"></div>
              <div class="grid-item">
                {" "}
                <div>
                  <h1 style={{ color: "black" }}>EPF</h1>
                  <hr />
                  <div
                    style={{
                      width: "50%",
                      display: "inline",
                      marginRight: "3px",
                    }}
                  >
                    Cash &nbsp; 3000
                  </div>
                  <div class="vl" style={{ display: "inline" }}></div>
                  <div
                    style={{
                      width: "50%",
                      display: "inline",
                      marginLeft: "3px",
                    }}
                  ></div>
                </div>
              </div>
              <div class="grid-item">
                {" "}
                <div>
                  <h1 style={{ color: "black" }}>ETF</h1>
                  <hr />
                  <div
                    style={{
                      width: "50%",
                      display: "inline",
                      marginRight: "3px",
                    }}
                  >
                    Cash &nbsp; 1000
                  </div>
                  <div class="vl" style={{ display: "inline" }}></div>
                  <div
                    style={{
                      width: "50%",
                      display: "inline",
                      marginLeft: "3px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAccounts;
