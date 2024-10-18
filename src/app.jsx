
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
import ConcursoJoya from "./pages/Consurso.jsx";
import Convocatoria from "./pages/Convocatoria.jsx";
import Terminos from "./pages/footerPages/Terminos.jsx";
import Refund from "./pages/footerPages/Refund.jsx";
import Shipping from "./pages/footerPages/Shipping.jsx";



export function App() {

  return (
   <div className="w-svw overflow-hidden">
      <Scroll/>
    <Routes>
      {/* <Route exact path="/" element={<Landing />} /> */}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/tienda" element={<Tienda />} />
      <Route exact path="/concurso" element={<ConcursoJoya />} />
      <Route exact path="/boutique" element={<Boutique />} />
      <Route exact path="/joyeria" element={<Joyeria />} />
      <Route exact path="/perfume" element={<Perfume />} />
      <Route exact path="/form" element={<Form />} />
      <Route exact path="/convocatoria" element={<Convocatoria />} />
      <Route exact path="/terminos" element={<Terminos />} />
      <Route exact path="/refund" element={<Refund />} />
      <Route exact path="/shipping" element={<Shipping />} />
      <Route path="/productDetail/:id" element={<ProductDetail/>} />
    </Routes>
 </div>
  
  )
}
