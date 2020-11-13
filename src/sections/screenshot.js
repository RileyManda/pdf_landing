import React, { Component } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaChartLine, FaCloudUploadAlt } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import SectionHeader from "./../component/section-header";
import "./../css/screenshot.css";

// section header content const
const title = (
  <h3 className="mb--15">
    The Power <br />
    of modern publishing on mobile
  </h3>
);
const subtitle = (
  <h6 className="sub-title">
    Make your publications available globally in one mobile space{" "}
  </h6>
);
const alignment = "section-header text-lg-left pb--40";

// section header 2 content const
const title2 = (
  <h3 className="mb--15">
    Easy to use Dashboard with <br />
    powerful user experience{" "}
  </h3>
);
const subtitle2 = (
  <h6 className="sub-title">Easy to use Dashboard with Powerful Features </h6>
);
const alignment2 = "section-header text-lg-left pb--20";

// section header 3 content const
const title3 = (
  <h3 className="mb-3">
    Powerful Encryption,
    <br />Protecting publications from misuse
  </h3>
);
const subtitle3 = (
  <h6 className="sub-title mb--30">
    You determine which of your publications and content can be shared{" "}
  </h6>
);
const alignment3 = "section-header text-lg-left";

const ssInfoList1 = [
  {
    icon: <FaCloudUploadAlt />,
    title: "Upload Publication",
    description: "Upload one or more publications at lightning speeds",
  },
  {
    icon: <FaChartLine />,
    title: "Manage & Encrypt",
    description:
      "Manage and Control your publications security with high end security",
  },
  {
    icon: <AiOutlineThunderbolt />,
    title: "Sell Publications",
    description: "Sell and receive analytics on all sales in one space",
  },
];

const ssInfoList2 = [
  {
    icon: <FiCheckCircle />,
    description: "Publish and Unpublish your publications",
  },
  {
    icon: <FiCheckCircle />,
    description: "Analyse and Track your sales with automated analytics",
  },
  {
    icon: <FiCheckCircle />,
    description: "Control the geographical visibility of your publications",
  },
];

class ScreenShot extends Component {
  render() {
    return (
      <section
        id="screenshot"
        className="screenshot-section bg-ash-color pt--60 pb--60 pt_lg--70 pb_lg--70"
      >
        <div className="container position-relative pt--30 pb--30 pt_lg--50 pb_lg--50">
          <div className="row">
            <div className="col-lg-5 order-lg-last">
              <div className="screenshot-content text-center text-lg-left">
                <SectionHeader
                  title={title}
                  subtitle={subtitle}
                  alignment={alignment}
                />

                <div className="screenshot-info-container-style1 hover-effect-parent1 text-left">
                  {ssInfoList1.map((val, i) => (
                    <div
                      className="screenshot-info-item d-flex flex-wrap"
                      key={i}
                    >
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h6 className="font-weight-bold mb-2 mt-0">
                          {val.title}
                        </h6>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-7 order-lg-first pr_lg--100">
              <div className="screenshot-image image1">
                <img
                  src="assets/images/screenshot/screenshot-img1.png"
                  alt="screenshot"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container position-relative pt--30 pb--30 pt_lg--50 pb_lg--50">
          <div className="row">
            <div className="col-lg-5">
              <div className="screenshot-content text-center text-lg-left">
                <SectionHeader
                  title={title2}
                  subtitle={subtitle2}
                  alignment={alignment2}
                />
                <div className="screenshot-info-container-style2 text-left">
                  {ssInfoList2.map((val, i) => (
                    <div
                      className="screenshot-info-item-style2 d-flex flex-wrap"
                      key={i}
                    >
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <p>{val.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-7 pl_lg--100">
              <div className="screenshot-image image2">
                <img
                  src="assets/images/screenshot/screenshot-img2.png"
                  alt="images"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container position-relative pt--30 pb--30 pt_lg--50 pb_lg--50">
          <div className="row">
            <div className="col-lg-5 order-lg-last">
              <div className="screenshot-content style3  text-center text-lg-left">
                <SectionHeader
                  title={title3}
                  subtitle={subtitle3}
                  alignment={alignment3}
                />
                <p className="desc">
                  PDF POC protects your Publicstions from illegal
                  resales,illegal photocopying with powerful encryption methods{" "}
                </p>
                <div className="custom-btn-group">
                  <a href="/" className="custom-btn mb-2 mb-lg-0 mx-2 ml-lg-0">
                    Get This Now
                  </a>
                  <a href="/" className="custom-btn mx-2">
                    Free Trial
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 order-lg-first pr_lg--100">
              <div className="screenshot-image xl-image">
                <img
                  src="assets/images/screenshot/screenshot-img3.png"
                  alt="screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ScreenShot;
