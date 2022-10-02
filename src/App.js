/* import logo from './logo.svg'; */
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import products from "./asyncMock"

function App() {

  let stock = 5;

  const handleOnAdd = () => {
    
    let inputCart = document.getElementById("inputCart").value;
    let onCart = inputCart;
   
    inputCart > stock ? onCart = stock : onCart = inputCart;

    document.getElementById("onCart").innerText = onCart;

  }

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

      <ItemCount onAdd={[handleOnAdd, stock]} />
      
{products.map(prod =>  <img key={prod.id} src={prod.img} alt="img"></img>)}
      
    </div>
  );
}

export default App;
