import React from 'react';
import './App.css';
import ProductList from './features/product-list/components/ProductList';
import Navbar from './features/navbar/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Cart } from './features/cart/Cart';
import Checkout from './pages/Checkout';
import ProductDetail from './features/product-list/components/ProductDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path:"/checkout",
    element:<Checkout></Checkout>
  },
  {
    path:"/product-detail",
    element:<ProductDetail></ProductDetail>
  }
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
       
    </div>
  );
}

export default App;
