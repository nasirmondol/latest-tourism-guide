import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Banner from './components/Banner/Banner';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/details/:serviceId' element={<ServiceDetails/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
