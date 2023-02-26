import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Accordion from "./components/Accordion";
import Buttons from "./components/Buttons";
import Heading from "./components/Heading";
import PdfContainer from "./components/PdfContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cbcshons from "./components/Routes/Cbcshons";
import CbcsNonhons from "./components/Routes/CbcsNonhons";
import NonCbcsDistance from "./components/Routes/NonCbcsDistance";
import NonCbcsRegular from "./components/Routes/NonCbcsRegular";

function App() {
  return (
    <>
      <Navbar />
      <Heading />
      <div className="container">
        <Buttons />
        <Accordion />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<PdfContainer />}>
            <Route path="CBCS-Hons" element={<Cbcshons />} />
            <Route path="CBCS-Non-Hons" element={<CbcsNonhons />} />
            <Route path="Non-CBCS-Regular" element={<NonCbcsRegular />} />
            <Route path="Non-CBCS Distance" element={<NonCbcsDistance />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
