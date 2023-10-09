import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <header>
      <Navbar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
    </header>

  );
}

export default App;
