import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './component/Home'
import Nike from './pages/Nike';
import Adidas from './pages/Adidas';
import Newbalance from './pages/Nb';
import Sepatu from './pages/Sepatu';
import Sandal from './pages/Sandal';
import Tas from './pages/Tas';
import Nb550wb from './payment/payment-nb/550-wb';
import Nb2002rgrey from './payment/payment-nb/2002r-grey';
import Yeezy451white from './payment/payment-adidas/yeezy451-white';
import Airmax270yellow from './payment/payment-nike/airmax270_yellow';
import Jordan5Retrowhite from './payment/payment-nike/jordan5retro_white';
import Dunkretropanda from './payment/payment-nike/dunkretro_panda';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Nike' element={<Nike />} />
        <Route path='/Adidas' element={<Adidas />} />
        <Route path='/Nb' element={<Newbalance />} />
        <Route path='/Sepatu' element={<Sepatu />} />
        <Route path='/Sandal' element={<Sandal />} />
        <Route path='/Tas' element={<Tas />} />
        <Route path='/Nb550wb' element={<Nb550wb />} />
        <Route path='/Nb2002rgrey' element={<Nb2002rgrey />} />
        <Route path='/Yeezy451white' element={<Yeezy451white />} />
        <Route path='/Airmax270yellow' element={<Airmax270yellow />} />
        <Route path='/Jordan5Retrowhite' element={<Jordan5Retrowhite />} />
        <Route path='/Dunkretropanda' element={<Dunkretropanda />} />
      </Routes>
    </Router>
  );
}

export default App;
