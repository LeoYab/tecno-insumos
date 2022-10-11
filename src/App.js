import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

    <div className="App">

      <BrowserRouter>

        <Navbar />
        
        <Routes>

          <Route path="/" element={<ItemListContainer greeting={
            {
              dia: "Buenos días",
              tarde: "Buenas tardes",
              noche: "Buenas noches"
            }
          } />} />

          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/category/:categoryId/:subcategoryId" element={<ItemListContainer />} />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />
          <Route path="/search/:imputSearchId" element={<ItemListContainer />} />

        </Routes>
        
      </BrowserRouter>

    </div>
  );
}


export default App;
