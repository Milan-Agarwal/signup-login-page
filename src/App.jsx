
import './App.css'
import Navbar from './components/Navbar'
import Signup from './components/signup'
import Login from './components/login'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Signup /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
  
  
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App
