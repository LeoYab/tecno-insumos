/* import logo from './logo.svg'; */
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  

  return (

    <div className="App">

      <Navbar />

    

   
      
      <ItemListContainer greeting={
        {
          dia: "Buenos días",
          tarde: "Buenas tardes",
          noche: "Buenas noches"
        }
      } />
<ItemDetailContainer />
      
    </div>
  );
}

export default App;
