import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import PlayStore from "./../component/playstore";
import "./../css/footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-top pt--100 pt_sm--120 pb--40 pb_lg--90">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget text-center text-lg-left mb--30 mb-lg-0">
                  <Link to="/" className="footer-logo">
                    <img src="assets/images/footer-logo.png" alt="logo" />
                  </Link>
                  <ul className="footer-contact-info pl-0 list-unstyled">
                    <li>
                      <a
                        href="mailto:info@example.com?Subject=Hello%20again"
                        target="_top"
                      >
                        <strong>Email:</strong> info@pdfapp.com
                      </a>
                    </li>

                    <li>
                      <a href="tel:448448737363">
                        <strong>Phone:</strong> +91 123 456 564
                      </a>
                    </li>
                  </ul>
                  <form className="footer-email-form">
                    <input type="email" name="email" placeholder="Email" />
                    <FaArrowRight />
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 pl-lg-5">
                <div className="footer-widget text-center text-lg-left mb--30 mb-lg-0">
                  <h5 className="footer-title">Site Links</h5>
                  <ul className="list-ustyled pl-0 pb-0 list-unstyled">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="#pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/">About</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 pl-lg-5">
                <div className="footer-widget text-center text-lg-left mb--30 mb-lg-0">
                  <h5 className="footer-title">Product Help</h5>
                  <ul className="list-ustyled pl-0 pb-0 list-unstyled">
                    <li>
                      <Link to="/">Faq</Link>
                    </li>
                    <li>
                      <Link to="/">How it works</Link>
                    </li>
                    <li>
                      <Link to="/">Features</Link>
                    </li>
                    <li>
                      <Link to="/">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget text-center text-lg-left mb--30 mb-lg-0">
                  <h5 className="footer-title">Download</h5>
                  <PlayStore />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <p>
                &copy; Copyrights 2020 <Link to="/">PDFApp</Link> All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
