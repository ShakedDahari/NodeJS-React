import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <span>&nbsp;</span>
          <Link to="/about">About</Link>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
