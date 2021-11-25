import './App.css';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  const pages = ['Home', 'Productos']
  return (
    <>
      <NavBar pages={pages} />
      <ItemListContainer  greeting="hola coder"/>
      <Counter/>
      <Counter stock={10}/>
      <Counter stock={15} initial={5}/>
      <Counter stock={15} initial={5} step={3}/>
    </>
  );
}

export default App;
