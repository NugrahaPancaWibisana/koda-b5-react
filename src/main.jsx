import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RickMorty from "./pages/RickMorty";
// import Product from "./pages/Product";
// import App from './pages/App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Product /> */}
    <RickMorty />
  </StrictMode>
);
