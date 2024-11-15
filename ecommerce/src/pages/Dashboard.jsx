import React from 'react';
import './styles/Dashboard.css';
import { Chart } from "react-google-charts";
import { Card , Table} from 'react-bootstrap';

const Dashboard = () => {

  const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2017", 1000, 100, 200],
    ["2018", 1170, 460, 250],
    ["2019", 660, 1120, 300],
    ["2020", 1030, 540, 350],
  ];
  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  };
  const dataPie = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  const optionPie = {
    title: "My Daily Activities",
  };
  const tableData = [
    { id: 1, productName: 'Product A', price: '$50', quantitySold: 120 },
    { id: 2, productName: 'Product B', price: '$30', quantitySold: 180 },
    { id: 3, productName: 'Product C', price: '$80', quantitySold: 90 },
    { id: 4, productName: 'Product D', price: '$20', quantitySold: 250 },
    { id: 5, productName: 'Product E', price: '$45', quantitySold: 300 },
  ];


  return (

    <div className='col-10'>

      <section className='main-container'  >
{/* cards row*/}
<div className="row">
        <div class="col-md-12 ">
          <div class="row p-4">
            <div class="col-xl-3 col-lg-6 ">
              <div class="card l-bg-cherry">
                <div class="card-statistic-3 p-4">
                  <div class="card-icon card-icon-large"><i class="fas fa-shopping-cart"></i></div>
                  <div class="mb-4">
                    <h5 class="card-title mb-0">Total User</h5>
                  </div>
                  <div class="row align-items-center mb-2 d-flex">
                    <div class="col-8">
                      <h2 class="d-flex align-items-center mb-0">
                        50.3k
                      </h2>
                    </div>
                    <div class="col-4 text-right">
                      <span>12.5% <i class="fa fa-arrow-up"></i></span>
                    </div>

                  </div>
                  <div class="progress mt-1 " data-height="8" style={{ height: "8px" }}>
                    <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-blue-dark">
                <div class="card-statistic-3 p-4">
                  <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div>
                  <div class="mb-4">
                    <h5 class="card-title mb-0">Total Retailers</h5>
                  </div>
                  <div class="row align-items-center mb-2 d-flex">
                    <div class="col-8">
                      <h2 class="d-flex align-items-center mb-0">
                        15.07k
                      </h2>
                    </div>
                    <div class="col-4 text-right">
                      <span>9.23% <i class="fa fa-arrow-up"></i></span>
                    </div>
                  </div>
                  <div class="progress mt-1 " data-height="8" style={{ height: "8px" }}>
                    <div class="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-green-dark">
                <div class="card-statistic-3 p-4">
                  <div class="card-icon card-icon-large"><i class="fas fa-ticket-alt"></i></div>
                  <div class="mb-4">
                    <h5 class="card-title mb-0">Total Customers</h5>
                  </div>
                  <div class="row align-items-center mb-2 d-flex">
                    <div class="col-8">
                      <h2 class="d-flex align-items-center mb-0">
                        8.5k
                      </h2>
                    </div>
                    <div class="col-4 text-right">
                      <span>10.3% <i class="fa fa-arrow-up"></i></span>
                    </div>
                  </div>
                  <div class="progress mt-1 " data-height="8" style={{ height: "8px" }}>
                    <div class="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "82%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-reddish">
                <div class="card-statistic-3 p-4">
                  <div class="card-icon card-icon-large"><i class="fas fa-chart-pie"></i></div>
                  <div class="mb-4">
                    <h5 class="card-title mb-0">Total Evenue</h5>
                  </div>
                  <div class="row align-items-center mb-2 d-flex">
                    <div class="col-8">
                      <h2 class="d-flex align-items-center mb-0">
                        15.6k
                      </h2>
                    </div>
                    <div class="col-4 text-right">
                      <span>13.3% <i class="fa fa-arrow-up"></i></span>
                    </div>
                  </div>
                  <div class="progress mt-1" data-height="8" style={{ height: "8px" }}>
                    <div class="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
        </div>
{/* charts and table row */}
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <Chart
                  chartType="Bar"
                  width="100%"
                  height="400px"
                  data={data}
                  options={options}
                />
              </Card.Body>
            </Card>
          </div>

          {/* Second column */}
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <Chart
                  chartType="PieChart"
                  data={dataPie}
                  options={optionPie}
                  width="100%"
                  height="400px"
                />
              </Card.Body>
            </Card>
          </div>


        {/* Third column with table */}
        <div className="col-md-4">
            <Card>
              <Card.Body>
              <Table responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity Sold</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.productName}</td>
                        <td>{row.price}</td>
                        <td>{row.quantitySold}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
        </div>
        </div>
      </section>


    </div>
  );
}
export default Dashboard;