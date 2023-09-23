import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

import Ejercicio1 from './pages/Ejercicio1';
import Ejercicio2 from './pages/Ejercicio2';
import Ejercicio3 from './pages/Ejercicio3';
import Ejercicio4 from './pages/Ejercicio4';
import Ejercicio5 from './pages/Ejercicio5';
import Ejercicio6 from './pages/Ejercicio6';
import Ejercicio7 from './pages/Ejercicio7';
import Ejercicio8 from './pages/Ejercicio8';
import Ejercicio9 from './pages/Ejercicio9';
import Ejercicio10 from './pages/Ejercicio10';
import Ejercicio11 from './pages/Ejercicio11';
import Ejercicio12 from './pages/Ejercicio12';
import Ejercicio13 from './pages/Ejercicio13';
import Ejercicio14 from './pages/Ejercicio14';
import Ejercicio15 from './pages/Ejercicio15';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='container py-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ejercicio-1' element={<Ejercicio1 />} />
          <Route
            path='/ejercicio-2'
            element={<Ejercicio2 message='my friend' />}
          />
          <Route
            path='/ejercicio-3'
            element={<Ejercicio3 message='my friend' />}
          />
          <Route path='/ejercicio-4' element={<Ejercicio4 />} />
          <Route path='/ejercicio-5' element={<Ejercicio5 />} />
          <Route path='/ejercicio-6' element={<Ejercicio6 />} />
          <Route path='/ejercicio-7' element={<Ejercicio7 />} />
          <Route path='/ejercicio-8' element={<Ejercicio8 />} />
          <Route path='/ejercicio-9' element={<Ejercicio9 />} />
          <Route path='/ejercicio-10' element={<Ejercicio10 />} />
          <Route path='/ejercicio-11' element={<Ejercicio11 />} />
          <Route path='/ejercicio-12' element={<Ejercicio12 />} />
          <Route path='/ejercicio-13' element={<Ejercicio13 />} />
          <Route path='/ejercicio-14' element={<Ejercicio14 />} />
          <Route path='/ejercicio-15' element={<Ejercicio15 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Router;
