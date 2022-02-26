import React from "react";
import ProfilePageUser from "./ProfilePageUser";
import { Link, Route } from "react-router-dom";
import ProfilePageCompany from "./ProfilePageCompany";
import CustomerListPage from "./CustomerListPage";
import AgencyBusinessList from "./AgencyBusinessList";
import BrokerBusiness from "./BrokerBusiness";
import NavigationBar from "../components/NavigationBar";
function Sidebar() {
  return (
    <>
      <NavigationBar />

      <div className="d-flex justify-content-start ">

        <div className="sidebardiv" style={{ border: "1px solid blue", height: "100vh" }}>
         
         
          <Link
            to="/profilepageuser"
            style={{
              color: "black",
              margin: "1rem",
              padding: "5px",

              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Profile Page User
          </Link>

          <Link
            to="/profilepagecompany"
            style={{
              color: "black",
              padding: "1rem",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Profile Page Company
          </Link>

          <Link
            to="/customerlistpage"
            style={{
              color: "black",
              textDecoration: "none",
              padding: "1rem",
              fontWeight: "bold",
            }}
          >
            Customer List Page
          </Link>

          <Link
            to="/brokerbusinesslist"
            style={{
              color: "black",
              padding: "1rem",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Agency/BrokerBusinesslist
          </Link>
          
          <Link
            to="/brokerbusiness"
            style={{
              color: "black",
              padding: "1rem",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Broker Business List
          </Link>

        </div>
        <div style={{ marginLeft: "0" }} >
          <Route path="/profilepageuser" component={ProfilePageUser} />
          <Route path="/profilepagecompany" component={ProfilePageCompany} />
          <Route path="/customerlistpage" component={CustomerListPage} />
          <Route path="/brokerbusinesslist" component={AgencyBusinessList} />
          <Route path="/brokerbusiness" component={BrokerBusiness} />
        </div>
      </div>

    </>
  );
}

export default Sidebar;
