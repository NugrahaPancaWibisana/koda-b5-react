import { Route, Routes } from "react-router";
import App from "./pages/App.jsx";
import Product from "./pages/Product";
import RickMorty from "./pages/RickMorty";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import DetailCharacter from "./pages/DetailCharacter.jsx";
import InputValidation from "./pages/InputValidation.jsx";
import Fetch from "./pages/Fetch.jsx";

export default function Router() {
  return (
    <Routes>
      {/* <Home /> */}
      <Route path='counter' element={<Home />} />
      {/* <Login /> */}
      <Route path='login' element={<Login />} />
      {/* <App /> */}
      <Route path='/' element={<App />} />
      {/* <Product /> */}
      <Route path='product' element={<Product />} />
      {/* <RickMorty /> */}
      <Route path='characters'>
        <Route index element={<RickMorty />} />
        <Route path=':id'>
          <Route path=':slug' element={<DetailCharacter />} />
        </Route>
      </Route>
      <Route path='input' element={<InputValidation />} />
      <Route path='fetch' element={<Fetch />} />
    </Routes>
  );
}

// function UserLayout() {
//   return (
//     <>
//       <header>User Header</header>
//       <main className='grid grid-cols-2'>
//         <section>
//           <ul>
//             <li>profile</li>
//             <li>history</li>
//             <li>logout</li>
//           </ul>
//         </section>
//         <Outlet></Outlet>
//       </main>
//       <footer>Copyright</footer>
//     </>
//   );
// }

// function AuthLayout() {
//   return (
//     <>
//       <Outlet />
//       <footer>Copyright</footer>
//     </>
//   );
// }

// function ProductsLayout() {
//   return (
//     <>
//       <header>Products Header</header>
//       <Outlet />
//       <footer>Copyright</footer>
//     </>
//   );
// }

// export const AppRouter = () => {
//   return (
//     <Routes>
//       <Route path='/app/v1'>
//         <Route element={<ProductsLayout />}>
//           <Route index element={<div>Home</div>} />
//           <Route path='products'>
//             <Route index element={<div>List Products</div>} />
//             <Route path='detail'>
//               <Route index element={<div>Detail Peoducts</div>} />
//               <Route path='order' element={<div>Order Products</div>} />
//             </Route>
//           </Route>
//         </Route>

//         <Route path='auth' element={<AuthLayout />}>
//           <Route index element={<div>Login</div>} />
//           <Route path='new' element={<div>Register</div>} />
//           <Route path='forgot' element={<div>Forgot</div>} />
//         </Route>

//         <Route path='user' element={<UserLayout />}>
//           <Route index element={<div>Profile</div>} />
//           <Route path='order' element={<div>Order History</div>} />
//         </Route>
//       </Route>
//       <Route
//         path='*'
//         element={
//           <div className='w-full h-dvh text-9xl font-black flex justify-center items-center'>
//             ERROR 404
//           </div>
//         }
//       />
//     </Routes>
//   );
// };
