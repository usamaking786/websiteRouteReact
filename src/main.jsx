import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './components/User.jsx'
import Github, { githubinfoLoader } from './components/Github.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element :<App/>,
    children : [
      {
        path :"about",
        element : <About/>
      },
      {
        path :"contact",
        element : <Contact/>
      },
      {
        path :"",
        element : <Home/>
      },
      {
        path :"user/:userID",
        element: <User/>,
      },
      {
        
        path :"github",
        element: <Github/>,
        loader : githubinfoLoader,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
