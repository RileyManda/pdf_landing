import React, { Component } from "react";
import Catagory from "./../component/sidebar/catagory";
import SearchFormSidebar from "./../component/sidebar/sidebar-search-form";
import SmallPostTab1 from "./../component/sidebar/small-post/small-post-tab";
import Tag from "./../component/sidebar/tag";
import "./../css/sidebar.css";

class SmallPostTab extends Component {
  render() {
    return (
      <div className="sidebar-wrapper">
        {/* Search Widget */}
        <div className="widget searh-widget">
          <SearchFormSidebar />
        </div>

        {/* Catagory Widget */}
        <div className="widget">
          <h5 className="widget-title">Catagories</h5>
          <div className="widget-wrapper">
            <Catagory />
          </div>
        </div>

        {/* small post widget */}
        <div className="widget">
          <h5 className="widget-title">Top Reviews</h5>
          <div className="widget-wrapper">
            <SmallPostTab1 />
          </div>
        </div>

        {/* Tag widget */}
        <div className="widget">
          <h5 className="widget-title">Trending Categories</h5>
          <div className="widget-wrapper">
            <Tag tagStyle={"style1"} itemNumber={7} />
          </div>
        </div>
      </div>
    );
  }
}

export default SmallPostTab;
