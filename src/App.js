import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter/Counter';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  const categorias = ['remeras', 'buzos']
  return (
    <BrowserRouter>
      <NavBar pages={categorias} />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="hola coder" />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path ="producto/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/carrito"/>
        </Routes>
      {/* <ItemListContainer  greeting="hola coder"/>
      <ItemDetailContainer />
      <Counter/>
      <Counter stock={10}/>
      <Counter stock={15} initial={5}/>
      <Counter stock={15} initial={5} step={3}/> */}
    </BrowserRouter>
  );
}

export default App;
