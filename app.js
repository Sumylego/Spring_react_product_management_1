import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Add_Product from './components/Add_Product';
import Edit_Product from './components/Edit_Product';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addProduct' element={<Add_Product/>}></Route>
        <Route path='/editProduct/:id' element={<Edit_Product/>}></Route>
      </Routes>
    </>
  );
}

export default App;
