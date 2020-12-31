import React, { Component } from "react";
import "./Leaderboard.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { Name: "Vijai", Score: "10",Time:"10s", Position: 1 },
        { Name: "Vishwa", Score: "10",Time:"11s", Position: 2 },
        { Name: "Yasica", Score: "9",Time:"13s", Position: 3 },
        { Name: "Sujatha", Score: "9",Time:"14s", Position: 4 },
        { Name: "Ram", Score: "8",Time:"9s", Position: 5 },
        { Name: "vetri", Score: "7",Time:"10s", Position: 6 },
        { Name: "Vivek", Score: "6",Time:"8s", Position: 7 },
        { Name: "Tharun", Score: "6",Time:"9s", Position: 8 },
        { Name: "Selvan", Score: "6",Time:"12s", Position: 9 },
        { Name: "Yakesh", Score: "5",Time:"8s", Position: 10 },
        { Name: "Sudharsan", Score: "4",Time:"9s", Position: 11 },
        { Name: "Srikar", Score: "3",Time:"7s", Position: 12 },
        { Name: "Yuvan", Score: "3",Time:"8s", Position: 13 },
        { Name: "Shankar", Score: "3",Time:"9s", Position: 14 },
        { Name: "Balaji", Score: "2",Time:"5s", Position: 15 },
      ],
    };
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { Name, Score, Time, Position } = student;
      return (
        <tr key={Name}>
          <td>{Name}</td>
          <td>{Score}</td>
          <td>{Time}</td>
          <td>{Position}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div className="students">
        <h1>Leaderboard</h1>
        <table className="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
