import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const { cart } = useSelector((state) => state);

  return (
    <div className=' '>
      <nav className='flex items-center m-auto h-20 max-w-6xl justify-between  '>
        <NavLink to={"/"}>
          <div className=' ml-5'><img className='h-14' src='../logo.png' /></div>
        </NavLink>
        <div className='flex items-center mr-5  space-x-8  font-medium text-xl text-slate-100 '>
          <NavLink  to={'/'}><p className='at_462px_home'>Home</p></NavLink>
          <NavLink to={'/cart'}>
          <div className='flex'>
            <FaShoppingCart className='text-2xl'/>
            {
              cart.length === 0 ? <p className=' w-4 h-4'></p>: <span className=' select-none  text-sm bg-green-600 w-4 h-4 animate-bounce flex items-center justify-center rounded-full cart_length text-white'>{cart.length}</span>            }
          </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar