import React from "react";
import { Table } from "react-bootstrap";

function CustomerListPage() {
  const data = [
    {
      Entitytype: 1,
      name: "Ganesh",
      lineOfBusness: "ABC",
      status: "Pending",
      Business: "laptop",
    },
    {
      Entitytype: 2,
      name: "Ganesh",
      lineOfBusness: "ABC",
      status: "Pending",
      Business: "laptop",
    },
    {
      Entitytype: 3,
      name: "Ganesh",
      lineOfBusness: "ABC",
      status: "Pending",
      Business: "laptop",
    },
    {
      Entitytype: 4,
      name: "Ganesh",
      lineOfBusness: "ABC",
      status: "Pending",
      Business: "laptop",
    },
  ];

  return (
    <div >
      <div className="main_dev" style={{ margin: "1rem 5rem 0 5rem" }}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Entity Type</th>
                <th>Name</th>
                <th>Line of Business</th>
                <th>status</th>
                <th>Business owner</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele,index) => {
                return (
                  <tr key={index}>
                    <td>{ele.Entitytype}</td>
                    <td>{ele.name}</td>
                    <td>{ele.lineOfBusness}</td>
                    <td>{ele.status}</td>
                    <td>{ele.Business}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
  );
}

export default CustomerListPage;
