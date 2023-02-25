import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Alert from './components/main/Alert';
import ClunBooth from './pages/clubBooth/ClunBooth';
import MainPage from './pages/main/MainPage';
import Schedule from './pages/schedule/Schedule';
import VisitLog from './pages/visitLog/VisitLog';


function App() {

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/booth' element={<ClunBooth />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/visitlog' element={<VisitLog />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div className='alert'>
        <Alert />
      </div>
    </>
  );
}

export default App;
