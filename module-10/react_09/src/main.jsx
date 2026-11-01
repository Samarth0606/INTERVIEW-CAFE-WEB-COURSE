import React, {Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Help from './components/Help.jsx'
// import Signin from './components/Signin.jsx'
// import Offers from './components/Offers.jsx'
// import Cart from './components/Cart.jsx'
import Body from './components/Body.jsx'
let Help = React.lazy(()=>import('./components/Help.jsx'))
let Signin = React.lazy(()=>import('./components/Signin.jsx'))
let Offers = React.lazy(()=>import('./components/Offers.jsx'))
let Cart = React.lazy(()=>import('./components/Cart.jsx'))
import Errorr from './components/Errorr.jsx'
import RestaurantDetails from './components/RestaurantDetails.jsx'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Errorr /> ,
    children: [
      {
        path: '/',
        element: <Suspense fallback="loading body...">  <Body /> </Suspense>
      },
      {
        path: '/offers',
        element:  <Suspense fallback="loading offers...">  <Offers /> </Suspense> 
      },
      {
        path: '/help',
        element: <Suspense fallback="loading help...">   <Help /> </Suspense>
      },
      {
        path: '/signin',
        element: <Suspense fallback="loading signin...">   <Signin /> </Suspense>
      },
      {
        path: '/cart',
        element: <Suspense fallback="loading cart...">   <Cart /> </Suspense>
      },
      {
        path: '/restaurant/:idd',
        element: <RestaurantDetails />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={appRouter} ></RouterProvider>
)
