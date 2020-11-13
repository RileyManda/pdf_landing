import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollTotop";
import SearchBody from "./component/search-body";
import App from "./home/App";
import Architecture from "./home/architecture";
import BlogListFullWidth from "./home/blog-list-fullwidth";
import BlogListRightsidebar from "./home/blog-list-rightsidebar";
import BlogDetail from "./home/bookdetail";
import Drama from "./home/drama";
import Education from "./home/education";
import Fiction from "./home/fiction";
import Motivation from "./home/motivation";
import Political from "./home/politics";
import Research from "./home/research";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <SearchBody />
        <ScrollToTop />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-list-rightsidebar`}
            component={BlogListRightsidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-list-fullwidth`}
            component={BlogListFullWidth}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/fiction`}
            component={Fiction}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/education`}
            component={Education}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/drama`}
            component={Drama}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/politics`}
            component={Political}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/research`}
            component={Research}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/architecture`}
            component={Architecture}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/motivation`}
            component={Motivation}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/book-details`}
            component={BlogDetail}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
// serviceWorker.unregister();
serviceWorker.register();
