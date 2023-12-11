import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {

  const { cart } = useSelector((state) => state);
  const [toatalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr) => (acc + curr.price),0));
  },[cart])

  return (
    <div className='w-full mt-10 h-full flex flex-col justify-center items-center'>
      {
        cart.length > 0 ? (
          <div className=' flex flex-row cart_control  gap-x-12  max-w-6xl mx-auto '>
            <div className='h-full w-[60%]'>
              {
                cart.map((item, index) => {
                  return (<CartItem key={item.id} item={item} itemIndex={index} />)
                })
              }
            </div>
            <div className='h-full Summary_block flex flex-col justify-between  gap-y-20'>

              <div className=' text-left '>
                <div className=' text-lg mt-14 text-green-800 font-semibold'>Your Cart</div>
                <div className='text-5xl font-semibold text-green-800'>Summary</div>
                <p  ><span className=' font-semibold text-slate-700'>Total items: {cart.length}</span></p>
              </div>

              <div>
                <p className=' font-medium  text-lg'>Total Amount: <span className=' font-bold'>${toatalAmount.toFixed(2)}</span></p>
                <button className='w-[100%] bg-green-800 font-semibold px-5 py-2 text-xl text-white rounded-md '>Checkout Now</button>
              </div>

            </div>
          </div>
        ) : (
          <div className='flex  mx-auto my-auto flex-col justify-center items-center'>
            <h1 className=' text-xl font-semibold'>Cart is Empty</h1>
            <NavLink to={'/'}><button className='w-[100%] bg-green-800 font-semibold px-5 py-2 text-xl text-white rounded-md '>Shop Now</button></NavLink>
          </div>
        )
      }
    </div>
  )
}

export default Cart