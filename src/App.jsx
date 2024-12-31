import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Signup /> },
    { path: "/login", element: <Login /> },
  ]);
  return (
    <>

      
      return <RouterProvider router={router} />;
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter> */}

    </>
  )
}

export default App