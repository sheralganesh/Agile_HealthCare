import React from "react";
import { Table } from "react-bootstrap";


function AgencyBusinessList() {
  const data = [
    {
      name: "ACC",
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
      name: "TNQ",
      lineOfBusness: "XYZ",
      status: "Pending",
      coordinatar: "laptop",
    },
    {
      name: "TESTYATRA",
      lineOfBusness: "XYZ",
      status: "Pending",
      coordinatar: "laptop",
    },
  ];
  return (
    <div>
    
      <div>
        <div className="main_dev" style={{ margin: "1rem 5rem 0 5rem" }}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Line of Business</th>
                <th>Status</th>
                <th>Co ordinator</th>
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
    </div>
  );
}

export default AgencyBusinessList;
