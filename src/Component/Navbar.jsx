import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex align-middle justify-around bg-red-400 mb-5 pt-3.5 pb-3.5 font-bold text-white w-100%" >
      <ul className="flex gap-28 list-none">
        <li className='active:text-cyan-300'><NavLink to="/">Home</NavLink></li>
        <li className='active:text-cyan-300'><NavLink to="/Calculator">BMI Analyzer</NavLink></li>
        <li className='active:text-cyan-300'><NavLink to="/Diet_Planner">NutriPlan</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar

