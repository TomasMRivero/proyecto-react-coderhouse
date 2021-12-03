import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CartView } from './components/CartView/CartView';
import Counter from './components/Counter/Counter';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './context/CartContext';
import { populateFirestore } from './helpers/firebaseHelpers';

function App() {
  const categorias = ['remeras', 'buzos']
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar pages={categorias} />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="hola coder" />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path ="producto/:idProducto" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<CartView/>}/>
          </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
