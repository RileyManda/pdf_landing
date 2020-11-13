import React, { Component } from "react";
import "./../css/component/price.css";

let PriceItemList = [
  {
    catagory: "Basic",
    price: 125,
    dollarSign: "₹",
    duration: "mo",
    condition: "30 days free trial on all account",
    btnText: "Subscribe",
    hiddenCharge: "No Hidden Charges!",
    PriceFeatureList: [
      {
        featureText: "Unlimited Uploads",
      },
      {
        featureText: "500 GB Storage",
      },
      {
        featureText: "Live Analytics",
      },
      {
        featureText: "Custom Domain",
      },
      {
        featureText: "24/7 Customer Support",
      },
      {
        featureText: "Unlimited Security Settings",
      },
    ],
  },
  {
    catagory: "Professional",
    price: 250,
    dollarSign: "₹",
    duration: "mo",
    condition: "30 days free trial on all account",
    btnText: "Subscribe",
    hiddenCharge: "No Hidden Charges!",
    PriceFeatureList: [
      {
        featureText: "Unlimited Uploads",
      },
      {
        featureText: "500 GB Storage",
      },
      {
        featureText: "Live Analytics",
      },
      {
        featureText: "Custom Domain",
      },
      {
        featureText: "24/7 Customer Support",
      },
      {
        featureText: "Unlimited Security Settings",
      },
    ],
  },
  {
    catagory: "Business",
    price: 285,
    dollarSign: "₹",
    duration: "mo",
    condition: "30 days free trial on all account",
    btnText: "Subscribe",
    hiddenCharge: "No Hidden Charges!",
    PriceFeatureList: [
      {
        featureText: "Unlimited Uploads",
      },
      {
        featureText: "500 GB Storage",
      },
      {
        featureText: "Live Analytics",
      },
      {
        featureText: "Custom Domain",
      },
      {
        featureText: "24/7 Customer Support",
      },
      {
        featureText: "Unlimited Security Settings",
      },
    ],
  },
];

class Price2 extends Component {
  render() {
    return (
      <div className="row justify-content-center justify-content-lg-start">
        {PriceItemList.map((value, i) => (
          <div className="col-md-6 col-lg-4" key={i}>
            <div className="axsis-pricing-item text-center mb--60 mb_lg--0">
              <div className="pricing-head">
                <div className="category-type">
                  <span>{value.catagory}</span>
                </div>
                <div className="price">
                  <span className="dollar-sign">{value.dollarSign}</span>
                  {value.price}{" "}
                  <span className="per-time">/{value.duration}</span>
                </div>
                <p className="free-trial-content">{value.condition}</p>
              </div>
              <div className="pricing-body">
                <ul className="pricing-feature-list list-unstyled  pl-0 text-center;">
                  {value.PriceFeatureList.map((feature, index) => (
                    <li key={index}>{feature.featureText}</li>
                  ))}
                </ul>
                <a href="/" className="custom-btn">
                  <span>{value.btnText}</span>
                </a>
                <p className="hidden-charge">{value.hiddenCharge}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Price2;
