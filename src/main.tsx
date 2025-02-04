import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Body from './components/main/Body.tsx'
import About from './components/main/About.tsx'
import Layout from './Layout.tsx'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

      <Route path='' element={<Body/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='store' element={<Body/>}/>

    </Route>
  )
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
