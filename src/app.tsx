import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Register } from "./pages/register/registe";

export function App() {
   return(
       <BrowserRouter>
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/register" element={<Register />} />
       </Routes>
       </BrowserRouter>
   )
}
