import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Stores from './Pages/Stores';
import Home from './Pages/Home';
import StoreById from './Pages/StoreById';
import ItemStore from './Pages/ItemStore';
import AddStore from './Pages/AddStore';
import AddItem from './Pages/AddItem';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <span>&nbsp;</span>|<span>&nbsp;</span>
          <Link to="/api/store">Stores</Link>
          <span>&nbsp;</span>|<span>&nbsp;</span>
          <Link to="/api/store/:id">Store By Id</Link>
          <span>&nbsp;</span>|<span>&nbsp;</span>
          <Link to="/api/stores/:store/:item">Item Store</Link>
          <span>&nbsp;</span>|<span>&nbsp;</span>
          <Link to="/api/store/add">Add Store</Link>
          <span>&nbsp;</span>|<span>&nbsp;</span>
          <Link to="/api/store/:store/items/add">Add Item</Link>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/api/store' element={<Stores/>}></Route>
            <Route path='/api/store/:id' element={<StoreById/>}></Route>
            <Route path='/api/stores/:store/:item' element={<ItemStore/>}></Route>
            <Route path='/api/store/add' element={<AddStore/>}></Route>
            <Route path='/api/store/:store/items/add' element={<AddItem/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
