import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  FaRegClock,
  FaRegUser,
  FaRegHeart,
  FaRegCommentAlt,
} from "react-icons/fa";
import "./../../css/component/blog.css";
import BlogListContent from "./blog-list-content";

class BlogList extends Component {
  render() {
    const PostList = BlogListContent.slice(0, this.props.itemNumber);
    return (
      <Fragment>
        {PostList.map((val, i) => (
          <div className="post-item mb--70" key={i}>
            <div className="post-thumb">
              <Link to="/book-details">
                <img src={`${val.images}`} alt="thumb" />
              </Link>
            </div>
            <div className="post-content">
              <ul className="meta-post list-unstyled pl-0 d-flex">
                <li>
                  <span className="icon">
                    <FaRegUser />
                  </span>
                  <Link to="/" className="meta-link">
                    Admin
                  </Link>
                </li>
                <li>
                  <span className="icon">
                    <FaRegClock />
                  </span>
                  <span className="meta-content">04 February 2020</span>
                </li>
                <li>
                  <span className="icon">
                    <FaRegCommentAlt />
                  </span>
                  <Link to="/" className="meta-link">
                    26 Comments
                  </Link>
                </li>
                <li>
                  <span className="icon">
                    <FaRegHeart />
                  </span>
                  <span className="meta-content">8 Likes</span>
                </li>
              </ul>
              <h5 className="title mb-3">
                <Link to="/book-details">{val.title}</Link>
              </h5>
              <p>{val.desc}</p>
              <Link to="/book-details" className="blog-custom-btn">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default BlogList;
