
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Reservation from './pages/Reservation';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import ConfirmBooking from './components/ConfirmBooking';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/reservations' element={<Reservation />}>Reservation</Route>
          <Route path='/order-online' element={<OrderOnline />}>Order Online</Route>
          <Route path='/login' element={<Login />}>Login</Route>
          <Route path='/booking-confirmation' element={<ConfirmBooking />}>Confirm Booking</Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
