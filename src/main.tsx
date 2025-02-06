import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Body from './components/main/Body.tsx'
import About from './components/main/About.tsx'
import Layout from './Layout.tsx'
import Home from './components/main/Home.tsx'
import ApiHandle from './components/main/ApiHandle.tsx'
import CustomUserCall from './components/main/customUserCall.tsx'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>

      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='store' element={<Body/>}/>
      <Route path='apicheck' element={<ApiHandle/>}/>
      <Route path='user/:userId' element={<CustomUserCall/>}>
       <Route path='/about' element={<About/>}/>
      </Route>

    </Route>
  )
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
