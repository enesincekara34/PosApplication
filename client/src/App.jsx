import {BrowserRouter, Routes, Route} from "react-router-dom";
import BillPage from "./pages/BillPage";
import HomePage from './pages/HomePage';
import CustomerPage from "./pages/CustomerPage";
import CartPage from './pages/CartPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='cart' element={<CartPage/>}/>
        <Route path="/bills" element={<BillPage />}/>
        <Route path="/customers" element={<CustomerPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
