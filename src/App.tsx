import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from './pages/Services';
import Home from "./pages/Home";
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import PortfolioPage from './pages/Portfolio';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
    {/* Footer */}
    <div className='my-12 text-primary text-center'>
        <p className='text-center text-xl'>
          &copy;2024 Sustain·ability. All rights reserved. <a href="#" className='underline'>Privacy Policy</a>
        </p>
        <p className="text-2xl lg:text-3xl tracking-tight my-6">
          <span>Sustain·</span><span className='font-semibold'>ability</span>
        </p>
      </div>
    </>
  );
}

export default App;
