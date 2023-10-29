import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Components/ShopCategory/ShopCategory';
import Home from './Components/Pages/Home/Home';
import Product from './Components/Product/Product';
import Cart from './Components/Pages/Cart/Cart';
import SignUp from './Components/Pages/SignUp/SignUp';
import BuyNow from './Components/Pages/BuyNow/BuyNow';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/mens' element={<ShopCategory category={"men's clothing"} page={'Mens'} sort_above={20}/>}/>
            <Route path='/womens' element={<ShopCategory category={"women's clothing"} page={'Womens'}/>}/>
            <Route path='/jewellery' element={<ShopCategory category={'jewelery'} page={'jewellery'}/>} />
            <Route path='/electronics' element={<ShopCategory category={'electronics'} page={'electronics'}/>}/>
            <Route path='/product' element={<Product />}>
              <Route path=':productId' />
            </Route>
            <Route path='/buynow' element={<BuyNow />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/cart' element={<Cart />} />
         </Routes>
         <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
