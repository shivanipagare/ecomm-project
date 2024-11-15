import logo from './logo.svg';
import './App.css';
//import LogIn from './Login'
import Navbar from './Navbar/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './pages/Dashboard';
import User from './pages/user/User';
import Roleassign from './pages/user/Roleassign'
import Roles from './pages/Roles';
import Subcategory from './pages/subcategory/Subcategory';
import Retailers from './pages/Retailers';
import Customer from './pages/Customer';
import Offer from './pages/Offer/Offer';
import ThirdParty from './pages/ThirdParty';
//import { FaHome, FaUser, FaUsers, FaWindows, FaWindowRestore, FaShoppingBag, FaGifts } from 'react-icons/fa';
import { Routes, Route } from 'react-router-dom';
import Viewcategory from './pages/category/Viewcategory';
function MainPage() {
  return (
    <div>
      <Navbar />
      <div className='d-flex'>
        <Sidebar />
        <Routes>

          <Route path='/' element={<Dashboard />} />
          <Route path='/user' element={<User />} />
          <Route path='/roles' element={<Roles />} />
          <Route path='/category' element={<Viewcategory />} />
          <Route path='/subcategory' element={<Subcategory />} />
          <Route path='/retailers' element={<Retailers />} />
          <Route path='/customer' element={<Customer />} />
          <Route path='/offer' element={<Offer />} />
          <Route path='/thirdparty' element={<ThirdParty />} />


        </Routes>

      </div>
    </div>
  );
}

export default MainPage;