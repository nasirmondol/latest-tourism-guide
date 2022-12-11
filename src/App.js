import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Footer from './components/Shared/Footer/Footer';
import Register from './components/Login/Register/Register';
import Login from './components/Login/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import MyOrders from './components/MyOrders/MyOrders';
import About from './components/About/About';
import AddService from './components/AddService/AddService';
import ManageService from './components/ManageService/ManageService';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/details/:serviceId' element={
          <RequireAuth>
            <ServiceDetails />
          </RequireAuth>
        }></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <MyOrders />
          </RequireAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService />
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageService />
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
