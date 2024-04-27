import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import APropos from '../pages/APropos'
import FicheLogement from '../pages/FicheLogement'
import Error from '../pages/Error'
import Header from './Header'
import Footer from './Footer'

function Router() {
    return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/APropos" element={<APropos />} />
          <Route path="/FicheLogement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;