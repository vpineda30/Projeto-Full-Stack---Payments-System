import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Register } from "./pages/register/register";

export function App() {
   return(
       <BrowserRouter>
       <Routes>
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/register" element={<Register />} />
       </Routes>
       </BrowserRouter>
   )
}
