import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../../css/component/catagory.css";

const catagoryList = [
  {
    catagoryName: "Fiction",
    catagoryCount: "432",
  },
  {
    catagoryName: "Education",
    catagoryCount: "732",
  },
  {
    catagoryName: "Drama",
    catagoryCount: "332",
  },
  {
    catagoryName: "Politics",
    catagoryCount: "654",
  },
  {
    catagoryName: "Research",
    catagoryCount: "124",
  },
  {
    catagoryName: "Architecture",
    catagoryCount: "543",
  },
  {
    catagoryName: "Motivational",
    catagoryCount: "32",
  },
];

class Catagory extends Component {
  render() {
    return (
      <ul className="catagory-list list-unstyled">
        {catagoryList.map((val, i) => (
          <li key={i}>
            <Link
              className="d-flex align-items-center justify-content-between"
              to="/"
            >
              <span className="text">{val.catagoryName}</span>
              <span className="count">{val.catagoryCount}</span>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Catagory;
