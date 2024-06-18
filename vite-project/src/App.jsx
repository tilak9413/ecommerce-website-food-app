import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';  // Correct import path
import Login from './component/Login';
import Hero from './component/Hero';
import Footer from './component/Footer';
import Shop from './component/Shop';
import Carddetails from './component/Carddetails';
import Addcard from './component/Addcard';
import Register from './component/Register';
import Contect from './component/Contect';
import Profile from './component/Profile';
import AboutUs from './component/AboutUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/carddetails/:photoId" element={<Carddetails />} />
        <Route path="/addcard" element={<Addcard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contect />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
