import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Register } from "./pages/register/register";
import { Home } from "./pages/home/home";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}
