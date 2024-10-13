
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing"
import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import Boutique from "./pages/Boutique";
import Joyeria from "./pages/Joyeria";
import Perfume from "./pages/Perfume";
import Form from "./pages/Form";
import ProductDetail from "./components/ProductDetail";
import Scroll from "./helpers/Scroll.jsx";



export function App() {

  return (
   <>
      <Scroll/>
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/tienda" element={<Tienda />} />
      <Route exact path="/boutique" element={<Boutique />} />
      <Route exact path="/joyeria" element={<Joyeria />} />
      <Route exact path="/perfume" element={<Perfume />} />
      <Route exact path="/form" element={<Form />} />
      <Route path="/productDetail/:title" element={<ProductDetail/>} />
    </Routes>
 </>
  
  )
}
