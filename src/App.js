import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ClunBooth from './pages/clubBooth/ClunBooth';
import MainPage from './pages/main/MainPage';
import Schedule from './pages/schedule/Schedule';
import VisitLog from './pages/visitLog/VisitLog';

function App() {
  return (
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
  );
}

export default App;
