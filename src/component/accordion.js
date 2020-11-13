import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./../css/component/accordion.css";
// import 'react-accessible-accordion/dist/fancy-example.css';

const FaqList = [
  {
    question: "What is PDF APP?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
  },
  {
    question: "How to Sell Publications?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
  },
  {
    question: "Monitoring Sales",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
  },
  {
    question: "Contact Support",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
  },
];

class Accordion1 extends Component {
  render() {
    return (
      <Accordion preExpanded={"0"}>
        {FaqList.map((val, i) => (
          <AccordionItem className="faq" key={i}>
            <AccordionItemHeading className="faq-header">
              <AccordionItemButton className="btn btn-link">
                <span className="icon">
                  <FaPlus className="fa-plus" />
                  <FaMinus className="fa-minus" />
                </span>
                <span className="text">{val.question}</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="faq-body">
              <p>{val.answer}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
}

export default Accordion1;
