import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CartView } from './components/CartView/CartView';
import { Checkout } from './components/Checkout/Checkout';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { getProductsFromLocalStorage } from './redux/actions/cartActions';
import { store } from './redux/store/store';

const AppWrapper = () => {
  return(
    <Provider store={ store }>
      <App />
    </Provider>
  )
}

function App() {
  const categorias = ['remeras', 'buzos']
  const dispatch = useDispatch();
  useEffect ( () => {
    dispatch(getProductsFromLocalStorage());
  }, [ dispatch ]);
  return (
        <BrowserRouter>
          <NavBar pages={categorias} />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="hola coder" />} />
              <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
              <Route path ="producto/:idProducto" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<CartView/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default AppWrapper;
