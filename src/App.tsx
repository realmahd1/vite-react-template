import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Sample from './pages/Sample';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"*"} element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
