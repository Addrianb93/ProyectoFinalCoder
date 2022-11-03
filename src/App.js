import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:id' element={<ItemListContainer/>} />
        <Route path='/item/:nombre' element={<ItemDetailContainer/>} />
        <Route path='*' element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
