import { Component } from "react";
import { data } from "./stackline_frontend_assessment_data_2021";
import LineChart from "./components/lineChart/lineCharts.component";
import Table from "./components/table/table.componen";
import logo from "./stackline_logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      salesData: data[0].sales,
    };
  }

  render() {
    const column = [
      { heading: "Week Ending", value: "weekEnding", id: 1 },
      { heading: "Retail Sales", value: "retailSales" },
      { heading: "Wholesale Sales", value: "wholesaleSales", id: 2 },
      { heading: "Units Sold", value: "unitsSold", id: 3 },
      { heading: "Retailer Margin", value: "retailerMargin", id: 4 },
    ];
    return (
      <div className="App">
        <header className="header">
          <img src={logo} alt="stackline logo" className="logo" />
        </header>
        <div className="content">
          <LineChart data={this.state.salesData} />
          <Table data={this.state.salesData} column={column} />
        </div>
      </div>
    );
  }
}

export default App;
