import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import ErrorPage from './Pages/error.jsx'
import HomePage from './Pages/home.jsx'

const router = createBrowserRouter([
  { path:'/login'  ,
    element:<LoginPage/>
  },
  { path:'/register'  ,
    element: <RegisterPage/>
  },
  { path:'/home'  ,
    element:<HomePage/>
  },
  { path:''  ,
    element:<ErrorPage/>,
    errorElement:<ErrorPage/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
