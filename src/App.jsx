import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import DietPlanner from './Component/DietPlanner'
import Calculator from './Component/Calculator'
import Home from './Component/Home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const route=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/Calculator",
      element:<><Navbar/><Calculator/></>
    },
    {
      path:"/Diet_Planner",
      element:<><Navbar/><DietPlanner/></>
    }
  ])

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
