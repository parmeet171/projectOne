import React from "react";
import {
  Link,
  Outlet,
} from "react-router-dom";

const PdfContainer = () => {
  return (
    <div className="PdfContainer flex-center">
      <p>syllabus for B.Com</p>
      <div className="pdfContainer_buttons">
        <Link to="/CBCS-Hons">CBCS Hons.</Link>
        <Link to="/CBCS-Non-Hons">CBCS Non-Hons.</Link>
        <Link to="/Non-CBCS-Regular">Non-CBCS Regular</Link>
        <Link to="/Non-CBCS Distance">Non-CBCS Distance</Link>
      </div>
      <div className="pdfContainer_content ">
        <Outlet />
      </div>
    </div>
  );
};

export default PdfContainer;
