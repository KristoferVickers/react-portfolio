import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import About from './pages/about.jsx';
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'
import Portfolio from './pages/Portfolio.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio />} /> 
      </Route>
    </Routes>
  </Router>
);