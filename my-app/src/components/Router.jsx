import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import APropos from '../pages/APropos'
import FicheLogement from '../pages/FicheLogement'
import Error from '../pages/Error'
import Header from './Header'
import React, { useState } from 'react';


function Router() {
  const [liens, setliens] = useState([false,false])
  return (
    <BrowserRouter>
    <Header liens={liens}/>
      <Routes>
        <Route path="/" element={<Home liens={liens} setliens={setliens}/>}/>
        <Route path="/APropos" element={<APropos liens={liens} setliens={setliens}/>}/>
        <Route path="/FicheLogement/:id" element={<FicheLogement liens={liens} setliens={setliens}/>}/>
        <Route path="*" element={<Error liens={liens} setliens={setliens}/>}/>
      </Routes>
    </BrowserRouter>
  );
}
  
export default Router;