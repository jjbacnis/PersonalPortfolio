import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import References from './pages/References';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Health Informatics Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}