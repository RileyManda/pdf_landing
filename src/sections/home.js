import React, { Component } from "react";
import PlayStore from "./../component/playstore";
import "./../css/banner.css";
const homeTitle = "PDF Publisher";
const homeDesc =
  "A Powerful and Safe Platform for Unlimited Digital PDF Publishing";

class home extends Component {
  render() {
    return (
      <section id="home" className="home-section">
        <div className="home-content d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="home-text">
                  <h1>{homeTitle}</h1>
                  <p>{homeDesc}</p>
                  <PlayStore />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-image-content d-flex align-items-center justify-content-center justify-content-lg-start">
          <div className="home-image pr--30 pl--30 pl-lg-0">
            <div className="home-joint-image">
              <img
                className="img1"
                src="assets/images/banner/img1.png"
                alt="shape1"
              />
              <img
                className="img2"
                src="assets/images/banner/img2.png"
                alt="shape2"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default home;
