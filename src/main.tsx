// import { StrictMode, useEffect } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Body from './components/main/Body.tsx'
// import About from './components/main/About.tsx'
// import Layout from './Layout.tsx'
// import Home from './components/main/Home.tsx'
// import ApiHandle from './components/main/ApiHandle.tsx'
// import CustomUserCall from './components/main/customUserCall.tsx'
// import ErrorPage from './components/error/ErrorPage.tsx'
// import AuthForm from './components/auth/AuthForm.tsx'
// // import { useCartContext } from './store/ContextStore.tsx'

// // import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'

// // const Cartcnxt = useCartContext()


// const router=createBrowserRouter(
//   createRoutesFromElements(
//     // <Route path='/' element={<App/>} errorElement={<ErrorPage/>}>
//     <Route path='/' element={ <AuthForm/> } errorElement={<ErrorPage/>}>
//       {/* <Route path="app" element={<App/>}/> */}

//       <Route path='home' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='store' element={<Body/>}/>
//       <Route path='apicheck' element={<ApiHandle/>}/>
//       <Route path='user/:userId' element={<CustomUserCall/>}>
//        <Route path='about' element={<About/>}/>
//       </Route>
//       <Route path='*' element={<ErrorPage/>}/>
//     </Route>
//   )
// )
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <RouterProvider router={router}/>
//   </StrictMode>,
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { CartContextProvider } from './store/ContextStore';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </StrictMode>
);
