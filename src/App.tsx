// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './components/header/Navbar'
// import Footer from './components/footer/Footer'
// import Body from './components/main/Body'
// import Heading from './components/header/Heading'
// import { CartContextProvider } from './store/ContextStore'
// import { Outlet } from 'react-router-dom'


// function App() {
//   const [cartItem, setCartItem] = useState([]);
//   const [token, setToken]= useState(null)
//   const products = [
//     { id: 1, name: "Album 1", price: 12.99, img: "./img/Album 1.png" },
//     { id: 2, name: "Album 2", price: 14.99, img: "./img/Album 2.png" },
//     { id: 3, name: "Album 3", price: 9.99, img: "./img/Album 3.png" },
//     { id: 4, name: "Album 4", price: 19.99, img: "./img/Album 4.png" },
//     { id: 5, name: "T-Shirt", price: 19.99, img: "./img/Shirt.png" },
//     { id: 6, name: "Coffee Cup", price: 6.99, img: "./img/Cofee.png" }
//   ];

//   const addCartItem = (product) => {
//     // setCartItem([...cartItem, item]);

//     setCartItem((prevCart)=>{
//       const existingItem = prevCart.find((item) => item.title === product.title);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };
//   const deleteCartItem=(id)=>{
//     console.log("run",id);
    
//     setCartItem(cartItem.filter(item=>item.id!==id))
//   }
//   const login=(tokenn)=>{
//     setToken(tokenn)
//   }
//   const logout=()=>{
//     setToken(null)
//   }
//   const islogged= !!token
//   console.log("checking",islogged);
  
//   return (
//     <CartContextProvider value={{cartItem,addCartItem, deleteCartItem, login, logout,token,islogged}}>
//       <div className="bg-gray-200 min-h-screen">
//       <Navbar  />
//       <Heading/>
//       {/* <Body /> */}
//       <Outlet/>
//       <Footer />
//     </div>
     
//     </CartContextProvider>  )
// }

// export default App
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet, createRoutesFromElements } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Heading from './components/header/Heading';
import Body from './components/main/Body';
import About from './components/main/About';
import Home from './components/main/Home';
import ApiHandle from './components/main/ApiHandle';
import CustomUserCall from './components/main/customUserCall';
import ErrorPage from './components/error/ErrorPage';
import AuthForm from './components/auth/AuthForm';
import { useCartContext } from './store/ContextStore';
import Layout from './Layout';



function App() {
  const { islogged, token } = useCartContext(); // ✅ Hook inside a component
  console.log(islogged);
  const [auth, setAuth]= useState(islogged)
  useEffect(()=>{
    setAuth(islogged)
  },[islogged])
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: islogged ? <Layout /> : <AuthForm />, // Redirect based on login state
  //     errorElement: <ErrorPage />,
  //     children: [
  //       { path: 'home', element: <Home /> },
  //       { path: 'about', element: <About /> },
  //       { path: 'store', element: <Body /> },
  //       { path: 'apicheck', element: <ApiHandle /> },
  //       {
  //         path: 'user/:userId',
  //         element: <CustomUserCall />,
  //         children: [{ path: 'about', element: <About /> }],
  //       },
  //       { path: '*', element: <ErrorPage /> },
  //     ],
  //   },
  // ]); 


  const router=createBrowserRouter(
      createRoutesFromElements(
        !(auth) ? (<Route path='/' element={<AuthForm/>} />):
        (<Route path='/' element={ <Layout/> } errorElement={<ErrorPage/>} >
          {/* <Route path="app" element={<App/>}/> */}
    
          <Route path='' element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path='store' element={<Body/>}/>
          <Route path='apicheck' element={<ApiHandle/>}/>
          <Route path='user/:userId' element={<CustomUserCall/>}>
           <Route path='about' element={<About/>}/>
          </Route>
          {/* <Route path='*' element={<ErrorPage/>}/> */}
        </Route> )
      )
    )

  return <RouterProvider router={router} />;
}

export default App;
