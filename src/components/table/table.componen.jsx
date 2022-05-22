import React, { useState } from "react";
import arrowSVG from "../../chevron-small-down.svg";
import "./table.styles.css";

const Table = ({ data, column }) => {
  const [sortOrder, setSortOrder] = useState("ASC");
  const [realData, setRealData] = useState(data);

  const sorting = (col) => {
    if (sortOrder === "ASC") {
      const sorted = [...realData].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setRealData(sorted);
      setSortOrder("DSC");
    }
    if (sortOrder === "DSC") {
      const sorted = [...realData].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setRealData(sorted);
      setSortOrder("ASC");
    }
  };

  const TableHeader = ({ item }) => {
    let sortTitle = "";
    if (item.heading === "Week Ending") {
      sortTitle = "weekEnding";
    }
    if (item.heading === "Retail Sales") {
      sortTitle = "retailSales";
    }
    if (item.heading === "Wholesale Sales") {
      sortTitle = "wholesaleSales";
    }
    if (item.heading === "Units Sold") {
      sortTitle = "unitsSold";
    }
    if (item.heading === "Retailer Margin") {
      sortTitle = "retailerMargin";
    }
    return (
      <th className="tableHeading">
        <div className="headerContainer">
          {item.heading.toUpperCase()}
          <img
            src={arrowSVG}
            alt="stackline logo"
            className="arrow-logo"
            onClick={() => sorting(sortTitle)}
          />
        </div>
      </th>
    );
  };

  let dollarUS = Intl.NumberFormat("en-US");
  const TableRow = ({ item, column }) => {
    return (
      <tr>
        {column.map((columnItem) => {
          if (
            columnItem.heading === "Retail Sales" ||
            columnItem.heading === "Wholesale Sales" ||
            columnItem.heading === "Retailer Margin"
          ) {
            return <td>${dollarUS.format(item[`${columnItem.value}`])}</td>;
          } else {
            return <td>{item[`${columnItem.value}`]}</td>;
          }
        })}
      </tr>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          {column.map((item) => (
            <TableHeader item={item} key={item.id} />
          ))}
        </tr>
      </thead>
      <tbody>
        {realData.map((item) => (
          <TableRow item={item} column={column} key={item.weekEnding} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
