import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  const pages = ['Home', 'Productos']
  return (
    <>
      <NavBar pages={pages} />
      <ItemListContainer  greeting="hola coder"/>
    </>
  );
}

export default App;
