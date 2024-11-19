import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';

import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Abouthome from './About/Abouthome';
import Serviceshome from './Services/Serviceshome';
import Propertieshome from './Properties/Propertieshome';
import Contacthome from './Contact/Contacthome';

function App() {
  return (
    <Router>
      <div className='overflow-auto h-auto scrollbar-hide'>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path='/abouthome' element={<Abouthome/>} />
          <Route path='/serviceshome' element={<Serviceshome/>} />
          <Route path='/Propertieshome' element={<Propertieshome/>} />
          <Route path='/contacthome'  element={<Contacthome/>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
