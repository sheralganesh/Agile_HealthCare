import React from "react";
import { Table } from "react-bootstrap";

function BrokerBusiness() {
  const data = [
    {
      name: "AGILE",
      lineOfBusness: "XYZ",
      status: "Pending",
      coordinatar: "laptop",
    },
    {
      name: "TCS",
      lineOfBusness: "XYZ",
      status: "Pending",
      coordinatar: "laptop",
    },
    {
      name: "ACCENTure",
      lineOfBusness: "XYZ",
      status: "Pending",
      coordinatar: "laptop",
    },
    {
      name: "Ganesh",
      lineOfBusness: "XYZ",
      status: "Pending",
      coordinatar: "laptop",
    },
  ];
  return (
    <div>
      <div className="main_dev" style={{ margin: "1rem 5rem 0 5rem" }}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Line Of Business</th>
              <th>Status</th>
              <th>Co Ordinator</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele,index) => {
              return (
                <tr key={index}>
                  <td>{ele.name}</td>
                  <td>{ele.lineOfBusness}</td>
                  <td>{ele.status}</td>
                  <td>{ele.coordinatar}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default BrokerBusiness;
