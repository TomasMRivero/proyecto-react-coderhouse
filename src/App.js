import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  const pages = ['Home', 'Productos']
  return (
    <NavBar pages={pages} />
  );
}

export default App;
