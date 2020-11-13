import React, { Component, Fragment } from "react";
import BlogSection from "../sections/blog-section";
import ContactSection from "../sections/contact-section";
import Footer from "../sections/footer-section";
import "./../css/app.css";
import FaqSection from "./../sections/faq-section";
import Feature from "./../sections/feature";
import Header from "./../sections/header";
import Home from "../sections/home";
import InterfaceSliderSection from "./../sections/interface-slider-section";
import PricingSection from "./../sections/pricing-section";
import ScreenShot from "./../sections/screenshot";
import TestimonialSection from "./../sections/testimonial-section";
import VideoSection from "./../sections/video-section";

class App extends Component {
  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document
          .querySelector(".header--fixed")
          .classList.add(["sticky"], ["animated"], ["slideInDown"]);
      } else {
        document
          .querySelector(".header--fixed")
          .classList.remove(["sticky"], ["animated"], ["slideInDown"]);
      }
    });
    return (
      <Fragment>
        <div className="App">
          <Header headerStyle={"header-style-1"} />
          <Home />
          <Feature />
          <ScreenShot />
          <VideoSection />
          <InterfaceSliderSection />
          <PricingSection />
          <TestimonialSection />
          <FaqSection />
          <BlogSection />
          <ContactSection />
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
