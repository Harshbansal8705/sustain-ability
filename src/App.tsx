import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from './pages/Services';
import Home from "./pages/Home";
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import FAQPage from './pages/FAQPage';
import BIMServicesPage from './pages/BIMServicesPage';
import MEPServicesPage from './pages/MEPDesignPage';
import StructuralDesignServicesPage from './pages/StructuralDesignPage';
import ThreeDVisualizationPage from './pages/ThreeDVisualisationPage';
import Navbar from './pages/Navbar';
function App() {
  return (
    <>
    <br />
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/services/bim" element={<BIMServicesPage />} />
        <Route path="/services/threeD-visualisation" element={<ThreeDVisualizationPage />} />
        <Route path="/services/mep" element={<MEPServicesPage />} />
        <Route path="/services/structure-design" element={<StructuralDesignServicesPage />} />
      </Routes>
    </Router>
    {/* Footer */}
    <div className='my-12 text-primary text-center'>
        <p className='text-center text-xl'>
          &copy;2024 Sustain·ability. All rights reserved. <a href="#" className='underline'>Privacy Policy</a>
        </p>
        <p className="text-2xl lg:text-3xl tracking-tight my-6">
          <img src="/logo-color.png" alt="Logo" className='m-auto' />
        </p>
      </div>
    </>
  );
}

export default App;
