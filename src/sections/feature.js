import React, { Component } from "react";
import { FaRegCommentAlt, FaDatabase, FaCopyright } from "react-icons/fa";
import SectionHeader from "./../component/section-header";
import "./../css/feature.css";

const FeatureList = [
  {
    icon: <FaDatabase />,
    title: "Secure Data Storage In cloud",
    description:
      "Access to Various storage plans for all your published and unpublished files",
  },
  {
    icon: <FaRegCommentAlt />,
    title: "24/7 Support",
    description:
      "We provide tech support services to address your issues on call.",
  },
  {
    icon: <FaCopyright />,
    title: "Security & Encryption",
    description:
      "Security encryption and protection for all your publications at the toggle of a button",
  },
];

// header section content
const title = (
  <h3 className="mb--25">
    Why <br />
    PDF POC.
  </h3>
);
const subtitle = (
  <h6>
    PDF POC enables you to publish PDFs and Sell your pdf publications making
    them visible to a wider audiance.PDF POC is digital publication Made Easy.
    <br />
  </h6>
);
const alignment = "section-header text-center pb--60";

class Feature extends Component {
  render() {
    return (
      <section
        id="feature"
        className="feature-section pt--60 pb--60 pt_lg--100 pb_lg--100"
      >
        <div className="container">
          <SectionHeader
            title={title}
            subtitle={subtitle}
            alignment={alignment}
          />
        </div>
        <div className="container">
          <div className="row justify-content-center justify-content-lg-start">
            {FeatureList.map((val, i) => (
              <div className="col-md-6 col-lg-4 mb--30 mb-lg-0" key={i}>
                <div className="feature-item text-left">
                  <div className="icon-box">
                    <div className="icon">{val.icon}</div>
                    <img
                      src="assets/images/feature/feature-dot-shape.png"
                      alt="dot shape"
                    />
                  </div>
                  <h5>{val.title}</h5>
                  <p>{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Feature;
