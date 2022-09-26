/* import logo from './logo.svg'; */
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (

    <div className="App">

  <Navbar />
  
  <ItemListContainer greeting = {
    {
      dia:"Buenos días",
      tarde:"Buenas tardes",
      noche:"Buenas noches"
  }
} />

  </div>
  );
}

export default App;
