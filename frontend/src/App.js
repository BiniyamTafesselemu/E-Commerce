import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import blackcargoW from './Components/Assets/blackcargoW.jpg'
// import blackcargoC from './Components/Assets/blackcargoC.webp'
import cargopC from './Components/Assets/cargopC.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={cargopC} category="men"/>} />
        <Route path='/womens' element={<ShopCategory banner={blackcargoW} category="women"/>} />
        <Route path='/kids' element={<ShopCategory banner={cargopC} category="kid"/>} />
        <Route path='/product' element={<Product />}>
          <Route path=':productID' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
