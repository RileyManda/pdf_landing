import React, { Component } from "react";
import InterfaceSlider from "./../component/interface-slider";
import SectionHeader from "./../component/section-header";
import "./../css/component/interface-slider.css";

// header section content
const title = (
  <h3 className="mb--20">
    We Designed the PDF POC App <br />
    to meet all your basic publiction needs
  </h3>
);
const subtitle = (
  <h6>
    It is as simple as you uploading your publications to the Dashboard
    <br />
    and yoiur clients getting global access to all your books from one central
    mobile application
  </h6>
);
const alignment = "section-header text-center pb--60";
class InterfaceSliderSection extends Component {
  render() {
    return (
      <section className="interface-slider-section pt--60 pb--50 pt_lg--120">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          alignment={alignment}
        />
        <div className="interface-slider">
          <InterfaceSlider />
        </div>
      </section>
    );
  }
}

export default InterfaceSliderSection;
