import React from "react";
import AccordionButtonGroup from "./AccordionButtonGroup";
import AccordionComponent from "./AccordionComponent";
import AccordionComponentThree from "./AccordionComponentThree";
import AccordionComponentTow from "./AccordionComponentTow";
import ButtonGroupTwo from "./ButtonGroupTwo";

const Accordion = () => {
  return (
    <div id="bcom"  className="flex-center">
      <p>Previous Year Questions Papers For B.Com (Both CBCS and Regular)</p>
      <h1 className="accordion_main_title">Bachelor of Commerce</h1>
      <p>under CBCS System</p>

      <div className="btn_accordion_container">
        <div className="accordion_left_section">
          <AccordionButtonGroup />
        </div>

        <div className="big_container">
          <AccordionComponent
            one="Alternative English"
            tow="Business Law"
            three="Communicative English"
            four="Economics"
            five="Finiancial Accounting"
          />
          <AccordionComponentTow
            one="Business Organisation and Management"
            tow="Financial Accounting"
            three="Multi-Disciplinary Course"
            four="English Communication"
            five="Assamese"
          />
        </div>
      </div>
      <div className="bcom_heading_two">
        <h6>NOTE: More CBCS Paper will be added soon</h6>
        <p>NON - CBCS (Regular) System</p>
      </div>

      <div className="btn_accordion_container">
        <div className="accordion_left_section">
          <ButtonGroupTwo />
        </div>

        <div className="big_container">
          <AccordionComponentThree
            one="Financial Communication"
            tow="Business Environment"
            three="Business Law"
            four="Financial Accounting"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
