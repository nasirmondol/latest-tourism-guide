import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Banner from './components/Banner/Banner';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Footer from './components/Shared/Footer/Footer';
import Register from './components/Login/Register/Register';
import Login from './components/Login/Login/Login';

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/details/:serviceId' element={<ServiceDetails/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
