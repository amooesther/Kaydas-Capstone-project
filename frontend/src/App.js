import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart.jsx';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUS/ContactUs'  ;
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Subscription from './pages/Subscriptions/Subscription';
import Login from './Components/Login/Login';
import Gallery from './pages/Gallery/Gallery.jsx'
import ScheduleOrder from './pages/ScheduleOrder/ScheduleOrder.jsx';
import Order from './pages/OrderHistory/Order.jsx';
import Description from './pages/ProductDescription/Description.jsx';
import SignUp from './Components/Login/SignUp.jsx'
import Delivery from './pages/Delivery/Delivery.jsx';
import Tracking from './pages/Tracking/Tracking.jsx';
import Payment from './pages/Payment/Payment.jsx';
import Card from './pages/Card/Card.jsx';
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
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/scheduleOrder' element={<ScheduleOrder/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/description' element={<Description/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/delivery' element={<Delivery/>} />
          <Route path='/tracking' element={<Tracking/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/card' element={<Card/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
