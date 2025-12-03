import { Route, Routes } from "react-router";
import App from "./pages/App.jsx";
import Product from "./pages/Product";
import RickMorty from "./pages/RickMorty";
import Home from "./pages/Home.jsx";

export default function Router() {
  return (
    <Routes>
      {/* <Home /> */}
      <Route path='/' element={<Home />} />
      {/* <App /> */}
      <Route path='counter' element={<App />} />
      {/* <Product /> */}
      <Route path='product' element={<Product />} />
      {/* <RickMorty /> */}
      <Route path='rickmorty' element={<RickMorty />} />
    </Routes>
  );
}
