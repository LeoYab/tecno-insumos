import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"
import { NotificationsServices} from "./Notifications/NotificationsServices"

function App() {

  return (

    <div className="App">

      <NotificationsServices>

        <CartProvider>

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
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>

          </BrowserRouter>

        </CartProvider>

      </NotificationsServices>
    </div>
  );
}


export default App;
