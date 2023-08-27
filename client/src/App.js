import './App.css'
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProducrtsPage from './pages/ProducrtsPage';
import BuyProduct from './pages/BuyProduct';
import Register from './components/Register';
import Loginto from './components/Loginto'
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
function App() {
let user=useSelector(state=>state.user.currentUser);
  return (
    <div className="App">
      <Router>
      <Announcement/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/:category" element={<ProducrtsPage/>}/>
          <Route path="/buyProduct/:id" element={<BuyProduct/>}/>
          <Route path="/sign-up" element={user?<Navigate to="/"/>:<Register/>}/>
          <Route path="/log-in" element={user?<Navigate to="/"/>:<Loginto/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
