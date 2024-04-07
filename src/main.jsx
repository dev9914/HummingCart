import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'
import ShopContextProvider from './Components/Context/ShopContext.jsx'
import women_banner from '../src/Components/Assets/women_banner.jpg'
import men_banner from '../src/Components/Assets/men_banner.jpg'
import kids_banner from '../src/Components/Assets/kids_banner.jpg'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Shop category="shop" />
      },
      {
        path: "Men",
        element: <ShopCategory category='men' banner={men_banner} />
      },
      {
        path: "Women",
        element: <ShopCategory category="women" banner={women_banner}/>
      },
      {
        path: "Kid",
        element: <ShopCategory category="kids" banner={kids_banner} />
      },
      {
        path: "product/:productId",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "login",
        element: <LoginSignup />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <RouterProvider router={router}/>
  </ShopContextProvider>

)
