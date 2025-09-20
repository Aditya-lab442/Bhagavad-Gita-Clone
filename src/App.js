import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import AboutGita from './pages/AboutGita';
import Chapter from './pages/Chapter';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Privacy from './pages/Privacy';

function Layout(){
  
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
  )
}

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/about" element={<AboutGita />} />
            <Route path="/chapter/:id" element={<Chapter />} />
            <Route path="/privacy" element={<Privacy />} />
          </Route>
        </Routes>
    </BrowserRouter>
    
  );

}

export default App;