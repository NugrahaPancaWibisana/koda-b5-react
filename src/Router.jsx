import { Route, Routes } from "react-router";
import App from "./pages/App.jsx";
import Product from "./pages/Product";
import RickMorty from "./pages/RickMorty";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";

export default function Router() {
  return (
    <Routes>
      {/* <Home /> */}
      <Route path='/' element={<Home />} />
      {/* <Login /> */}
      <Route path='login' element={<Login />} />
      {/* <App /> */}
      <Route path='counter' element={<App />} />
      {/* <Product /> */}
      <Route path='product' element={<Product />} />
      {/* <RickMorty /> */}
      <Route path='rickmorty' element={<RickMorty />} />
    </Routes>
  );
}
