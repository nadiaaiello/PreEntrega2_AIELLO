import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar/>
        <ItemListContainer greeting={'Bienvenidos'}/>
      </header>
      <main>
        <ItemCount/>
      </main>
    </div>

  );
}

export default App;
