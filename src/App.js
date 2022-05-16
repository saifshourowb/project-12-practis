import './App.css';
import NavBar from './Pages/Shared/NavBar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appoinment from './Pages/Appoinment/Appoinment';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appoinment" element={<Appoinment />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
