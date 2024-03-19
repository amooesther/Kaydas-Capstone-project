import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUS/ContactUs'  ;
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Subscription from './pages/Subscriptions/Subscription';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/contactUS' element={<ContactUs />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/subscription' element={<Subscription />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
