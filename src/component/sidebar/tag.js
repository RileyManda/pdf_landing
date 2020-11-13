import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../../css/component/tag.css";

const tagListContent = [
  {
    tagName: "Politics",
    tagLink: "/",
  },
  {
    tagName: "Art",
    tagLink: "/",
  },
  {
    tagName: "Educational",
    tagLink: "/",
  },
  {
    tagName: "Prints",
    tagLink: "/",
  },
  {
    tagName: "Press",
    tagLink: "/",
  },
  {
    tagName: "Technology",
    tagLink: "/",
  },
  {
    tagName: "ChildCare",
    tagLink: "/",
  },
];
class Tag extends Component {
  render() {
    const tagList = tagListContent.slice(0, this.props.itemNumber);
    const { tagStyle } = this.props;
    return (
      <ul className={`tag-list list-unstyled ${tagStyle ? tagStyle : ""}`}>
        {tagList.map((val, i) => (
          <li key={i}>
            <Link to={val.tagLink}>{val.tagName}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Tag;
